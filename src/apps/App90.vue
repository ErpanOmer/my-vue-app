<style lang="scss">
#app {
    height: 100vh;

    &>section {
        transform: translateY(15%);
    }
}
</style>

<template>
    <section
        class="er-mx-auto er-max-w-[768px] er-grid er-grid-cols-3 er-rounded-2xl er-shadow-sm er-text-white mb:er-grid-cols-[1fr_1.5fr_1.5fr] mb:er-rounded-none">
        <div class="er-pl-6 er-flex er-flex-col er-justify-end er-rounded-l-2xl er-pb-6 mb:er-pl-4 mb:er-pb-4 mb:er-rounded-none"
            style="background-color: #DE7800;">
            <div class="er-flex er-items-end er-py-6 er-px-4 mb:er-pr-4 mb:er-pl-0 mb:er-py-3">
                <b class="text-size20 mb:er-text-2xl er-font-bold">Advantages</b>
            </div>
            <div
                class="er-flex er-flex-col er-justify-center er-items-start er-text-left er-border-t er-border-solid er-border-white/25 er-h-28 mb:er-h-20 er-px-4 mb:er-px-2 mb:er-pl-0">
                <b class="text-size18 mb:er-text-base er-font-medium">45% lighter</b>
                <span class="text-size14 mb:er-text-sm">(same geometry)</span>
            </div>
            <div
                class="er-flex er-flex-col er-justify-center er-items-start er-text-left er-border-t er-border-solid er-border-white/25 er-h-28 mb:er-h-20 er-px-4 mb:er-px-2 mb:er-pl-0">
                <b class="text-size18 mb:er-text-base er-font-medium">35× higher</b>
                <span class="text-size14 mb:er-text-sm">tensile strength</span>
            </div>
            <div
                class="er-flex er-flex-col er-justify-center er-items-start er-text-left er-border-t er-border-solid er-border-white/25 er-h-28 mb:er-h-20 er-px-4 mb:er-px-2 mb:er-pl-0">
                <b class="text-size18 mb:er-text-base er-font-medium">3× stiffer</b>
                <span class="text-size14 mb:er-text-sm"></span>
            </div>
            <div
                class="er-flex er-flex-col er-justify-center er-items-start er-text-left er-border-t er-border-solid er-border-white/25 er-h-28 mb:er-h-20 er-px-4 mb:er-px-2 mb:er-pl-0">
                <b class="text-size18 mb:er-text-base er-font-medium">Greater</b>
                <span class="text-size14 mb:er-text-sm">design freedom</span>
            </div>
            <div
                class="er-flex er-flex-col er-justify-center er-items-start er-text-left er-border-t er-border-solid er-border-white/25 er-h-28 mb:er-h-20 er-px-4 mb:er-px-2 mb:er-pl-0">
                <b class="text-size18 mb:er-text-base er-font-medium">Lighter</b>
                <span class="text-size14 mb:er-text-sm">more joyful ride</span>
            </div>
            <div
                class="er-flex er-flex-col er-justify-center er-items-start er-text-left er-border-t er-border-solid er-border-white/25 er-h-28 mb:er-h-20 er-px-4 mb:er-px-2 mb:er-pl-0">
                <b class="text-size18 mb:er-text-base er-font-medium">More comfortable</b>
                <span class="text-size14 mb:er-text-sm"> on long rides</span>
            </div>
            <div
                class="er-flex er-flex-col er-justify-center er-items-start er-text-left er-border-t er-border-solid er-border-white/25 er-h-28 mb:er-h-20 er-px-4 mb:er-px-2 mb:er-pl-0">
                <b class="text-size18 mb:er-text-base er-font-medium">Longer lifespan</b>
                <span class="text-size14 mb:er-text-sm">& better value</span>
            </div>
        </div>
        <div class="er-flex er-flex-col er-justify-end er-bg-cover er-bg-no-repeat er-bg-top er-mt-[-25px] er-mb-[-25px] mb:er-mt-[-15px] mb:er-mb-[-15px] er-rounded-2xl er-overflow-hidden er-shadow-sm er-pb-16 mb:er-pb-10"
            style="background-color: rgb(240, 129, 0);">
            <div class="er-flex er-items-end er-py-6 mb:er-py-3 er-px-7 mb:er-px-3 er-aspect-[6/5] er-bg-cover er-bg-top er-bg-no-repeat"
                style="background-image: url('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20250523-150609.jpg?v=1747983984');">
                <b class="text-size20 mb:er-text-2xl er-font-bold">Carbon Fiber</b>
            </div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/25 er-px-7 mb:er-px-3">
                ～1.5g/cm³</div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/25 er-px-7 mb:er-px-3">
                ～7000MPa</div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/25 er-px-7 mb:er-px-3">
                ～200GPa</div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/25 er-px-7 mb:er-px-3">
                Smooth, aerodynamic,<br>flexible forms</div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/25 er-px-7 mb:er-px-3">
                Agile, easy to<br>maintain speed</div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/25 er-px-7 mb:er-px-3">
                Absorb and<br>dissipate vibration</div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/25 er-px-7 mb:er-px-3">
                Resistant to fatigue</div>
        </div>
        <div
            class="er-flex er-flex-col er-justify-end er-bg-dark er-rounded-r-2xl er-pb-6 mb:er-pb-4 mb:er-rounded-none">
            <div class="er-flex er-items-end er-py-6 mb:er-py-3 er-px-4 mb:er-px-0 er-flex-1 er-bg-cover er-bg-top er-bg-no-repeat er-rounded-tr-2xl er-relative"
                style="background-image: url('https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20250523-145513.jpg?v=1747983325');">
                <b class="text-size20 mb:er-text-xl er-font-bold er-pl-16 mb:er-whitespace-nowrap">Aluminum Alloy</b>
                <i
                    class="text-size72 er-absolute er-left-0 er-top-1/3 er-tracking-wide er-translate-x-[-50%] mb:er-text-5xl">V.<span
                        style="color: #F09600;">S.</span></i>
            </div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/15 er-ml-[-50px] mb:er-ml-[-33px]">
                <span
                    class="text-size12 mb:er-text-sm er-block er-bg-white er-text-dark er-w-40 er-min-w-40 mb:mb:er-min-w-24  mb:er-w-24 er-text-center er-py-4 mb:er-py-2 er-rounded-full er-mr-8 mb:er-mr-4 mb:er-px-1">Weight</span><span>～2.7g/cm³</span>
            </div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/15 er-ml-[-50px] mb:er-ml-[-33px]">
                <span
                    class="text-size12 mb:er-text-sm er-block er-bg-white er-text-dark er-w-40 er-min-w-40 mb:mb:er-min-w-24  mb:er-w-24 er-text-center er-py-4 mb:er-py-2 er-rounded-full er-mr-8 mb:er-mr-4 mb:er-px-1">Strength</span><span>～200MPa</span>
            </div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/15 er-ml-[-50px] mb:er-ml-[-33px]">
                <span
                    class="text-size12 mb:er-text-sm er-block er-bg-white er-text-dark er-w-40 er-min-w-40 mb:mb:er-min-w-24  mb:er-w-24 er-text-center er-py-4 mb:er-py-2 er-rounded-full er-mr-8 mb:er-mr-4 mb:er-px-1">Stiffness</span><span>～70GPa</span>
            </div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/15 er-ml-[-50px] mb:er-ml-[-33px]">
                <span
                    class="text-size12 mb:er-text-sm er-block er-bg-white er-text-dark er-w-40 er-min-w-40 mb:mb:er-min-w-24  mb:er-w-24 er-text-center er-py-4 mb:er-py-2 er-rounded-full er-mr-8 mb:er-mr-4 mb:er-px-1">Design</span><span>Welded
                    joints, limited shapes, visible welds</span>
            </div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/15 er-ml-[-50px] mb:er-ml-[-33px]">
                <span
                    class="text-size12 mb:er-text-sm er-block er-bg-white er-text-dark er-w-40 er-min-w-40 mb:mb:er-min-w-24  mb:er-w-24 er-text-center er-py-4 mb:er-py-2 er-rounded-full er-mr-8 mb:er-mr-4 mb:er-px-1">Ride
                    quality</span><span>Heavier, harder to maneuver</span>
            </div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/15 er-ml-[-50px] mb:er-ml-[-33px]">
                <span
                    class="text-size12 mb:er-text-sm er-block er-bg-white er-text-dark er-w-40 er-min-w-40 mb:mb:er-min-w-24  mb:er-w-24 er-text-center er-py-4 mb:er-py-2 er-rounded-full er-mr-8 mb:er-mr-4 mb:er-px-1">Comfortability</span><span>Transfers
                    vibration rigidly</span>
            </div>
            <div
                class="er-h-28 mb:er-h-20 er-flex er-items-center text-size16 mb:er-text-sm er-font-medium er-border-t er-border-solid er-border-white/15 er-ml-[-50px] mb:er-ml-[-33px]">
                <span
                    class="text-size12 mb:er-text-sm er-block er-bg-white er-text-dark er-w-40 er-min-w-40 mb:mb:er-min-w-24  mb:er-w-24 er-text-center er-py-4 mb:er-py-2 er-rounded-full er-mr-8 mb:er-mr-4 mb:er-px-1">Durability</span><span>Prone
                    to fatigue &<br>welding degradation</span>
            </div>
        </div>
    </section>
</template>