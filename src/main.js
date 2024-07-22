window.customElements.define('count-down', class extends HTMLElement {
    static observedAttributes = ["endtime", "fontcolor", "fontweight", "fontfamily", "fontsize", 'ratio',
        'timezone'
    ];

    // config
    config = {
        endtime: 0,
        fields: ['days', 'hours', 'minutes', 'seconds'],
        units: ['tage', 'stunden', 'minuten', 'sekunden'],
        days: 1000 * 60 * 60 * 24,
        hours: 1000 * 60 * 60,
        minutes: 1000 * 60,
        seconds: 1000,
        ratio: 9 / 16,
        fontsize: 100,
        fontcolor: 'red',
        fontweight: '600',
        fontfamily: 'sans-serif',
        timezoneoffset: 0
    }

    width = 0
    height = 0
    textWidth = 0

    constructor() {
        // 必须首先调用 super 方法
        super();

        const shadow = this.attachShadow({
            mode: "open"
        });
        this.canvas = document.createElement('canvas')
        this.div = document.createElement('div')
        shadow.appendChild(this.canvas)
        shadow.appendChild(this.div)

        // this.style.display = 'flex'
        // this.style.flexDirection = 'column'
        // this.style.alignItems = 'center'
        // this.style.justifyContent = 'center'
        // this.style.letterSpacing = '0px'
    }

    getUTCTime(now = new Date()) {
        return now.getTime() + (now.getTimezoneOffset() * 60 * 1000) + this.config.timezoneoffset
    }


    initCanvas() {
        this.context = this.canvas.getContext("2d");


        for (const unit of this.config.units) {
            const span = document.createElement('span')
            span.innerText = unit.toUpperCase()
            span.style.color = this.config.fontcolor
            span.style.fontSize = `${this.config.fontsize / 3.75}px`
            span.style.fontWeight = `${Number(this.config.fontweight) + 200}`
            span.style.flex = 1
            span.style.textAlign = 'center'
            span.style.display = 'flex'
            span.style.alignItems = 'center'
            span.style.justifyContent = 'center'
            span.style.width = '100%'
            span.style.minWidth = '100%'

            this.div.appendChild(span)
        }

        this.div.style.letterSpacing = '-1px'
        this.div.style.display = 'grid'
        this.div.style.gridTemplateColumns = `repeat(${this.config.units.length}, 1fr)`
        this.div.style.columnGap = '12%'

        window.onresize = () => this.onResize()
        this.onResize()
    }

    onResize(width = 0, height = 0) {
        console.log(width, height)

        this.width = width
        this.height = height

        this.canvas.width = this.width
        this.canvas.height = this.height
    }


    startCountdown() {
        let cachedValues = {};

        const updateTimer = (timestamp) => {
            let timeDifference = this.config.endtime - this.getUTCTime();

            if (timeDifference <= 0) {
                return console.log("Countdown Ended!");
            } else {
                const values = {};

                for (const field of this.config.fields) {
                    values[field] = Math.floor(timeDifference / this.config[field]);
                    timeDifference = timeDifference % this.config[field];
                }

                const hasChanged = Object.keys(values).some(field => values[field] !== cachedValues[field]);

                if (hasChanged) {
                    cachedValues = {
                        ...values
                    };


                    this.onResize(this.width, this.height)


                    this.context.clearRect(0, 0, this.width, this.height);
                    this.context.fillStyle = this.config.fontcolor;
                    this.context.font = `${this.config.fontweight} ${this.config.fontsize}px ${this.config.fontfamily}`;
                    // this.context.textAlign = 'center';
                    this.context.textBaseline = 'middle';

                    let text = "";
                    for (const field of this.config.fields) {
                        text += `${text === "" ? '' : ' : '}${String(values[field]).padStart(2, '0')}`
                    }

                    this.context.fillText(text, 0, this.height / 1.625);

                    const matrix = this.context.measureText(text);
                    this.height = Math.floor((matrix.actualBoundingBoxAscent + matrix.actualBoundingBoxDescent) * 1.4)
                    this.width = Math.floor(matrix.width)
                
                    this.div.style.width = `${this.width}px`
                }
            }

            setTimeout(updateTimer, 1000)
        }

        setTimeout(updateTimer)
    }


    connectedCallback() {
        this.initCanvas()
        this.startCountdown();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, newValue)

        if (name === 'timezone') {
            const zone = newValue === 'us' ? 420 : -120
            return this.config.timezoneoffset = zone * 1000 * 60
        }

        if (name === 'endtime' && newValue) {
            const [y, m, d] = newValue.split('-').map(Number)
            this.config.endtime = this.getUTCTime(new Date(Date.UTC(y, m - 1, d, 0, 0, 0, 0) + this.config.timezoneoffset))
            return
        }

        if (name === "ratio") {
            this.config.ratio = Number(newValue)
            return
        }


        this.config[name] = newValue
    }
})