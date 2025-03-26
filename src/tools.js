import mapboxgl from 'mapbox-gl';

// unit 0：meters, 1: miles

export function convertDistance(value = 0, unit = 0) {
    const metersToMiles = 0.000621371; // 1 米 ≈ 0.000621371 英里
    const milesToMeters = 1609.34; // 1 英里 ≈ 1609.34 米
    
    return unit === 0 ? value * milesToMeters : value * metersToMiles
}


export function debounce(fn, delay = 300) {
    let timer = null; // 用于存储定时器

    return function (...args) {
        if (timer) clearTimeout(timer); // 清除之前的定时器
        timer = setTimeout(() => {
            fn.apply(this, args); // 执行传入的函数
        }, delay);
    };
}

export function throttle (fn, delay = 200) {
    let lastTime = 0;
    let rafId = null;

    return function (...args) {
        const now = performance.now(); // 使用高精度时间戳
        if (now - lastTime >= delay) {
            lastTime = now;
            if (rafId) cancelAnimationFrame(rafId); // 取消上一次的 rAF
            rafId = requestAnimationFrame(() => fn.apply(this, args));
        }
    };
};


export function getDistance(r1 = [], r2 = []) {
    r1 = new mapboxgl.LngLat(...r1);
    r2 = new mapboxgl.LngLat(...r2);

    const km = (r1.distanceTo(r2) / 1000).toFixed(2)

    return (km * 0.621371).toFixed(2)
}

export function toBounds(center = [], meters = 0) {
    if (!center.length || meters < 0) {
        return []
    }

    // const aspectRatio = document.body.clientWidth / document.body.clientHeight;
    const aspectRatio = 1

    const ll = new mapboxgl.LngLat(...center);
    return ll.toBounds(meters * aspectRatio).toArray()
}

export const rangeExclude = (start, end, max = 24) =>  new Uint8Array(max + 1).map((_, i) => i).filter(i => i < start || i > end);