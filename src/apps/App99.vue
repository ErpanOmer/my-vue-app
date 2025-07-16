<style lang="css" scoped>
div {
    height: 30vh;
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    background-color: #fff;
    margin-top: 5vh;
}

i {
    color: #a1a1a1;
    font-size: 0.75em;
    margin-top: 4vh;
}

div:last-child {
    /* background-color: #000; */
}

button {
    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.25;
    border-radius: 25px;
    display: inline-flex;
    box-sizing: border-box;
    padding: 12px 40px;
    user-select: none;
    transition: .3s;
    gap: 8px;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    white-space: nowrap;
    border: 2px solid var(--er-btn-bg-color);
    background-color: var(--er-btn-bg-color);
    color: var(--er-btn-text-color);
    letter-spacing: .025em;
    color: #fff;
    /* margin-right: 25px; */
}

/* 在深色模式下，只需降低 L 值即可生成深色变体，色相和色度保持一致 */
.dark-mode {
    --brand-primary-darker: oklch(calc(var(--brand-primary-l) - 20%) var(--brand-primary-c) var(--brand-primary-h));
    color: var(--brand-primary-darker);
    background-color: oklch(10% 0.05 280);
    /* 匹配的深色背景 */
}

/* 动态生成更亮的变体 */
.button-light {
  background-color: oklch(calc(var(--brand-primary-l) + 15%) var(--brand-primary-c) var(--brand-primary-h));
}
</style>

<template>
    <div>
        <button class="button-light">Hello world</button>
        <i>(light-mode)</i>
    </div>
    <div class="dark-mode">
        <button class="button-light">Hello world</button>
        <i>(dark-mode)</i>
    </div>
</template>



<style>
#app {
    height: 100vh;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    padding: 0 20vw;
     /* 定义一个品牌主色，例如中等亮度的紫色 */
    --brand-primary-l: 50%;
    --brand-primary-c: 0.2;
    --brand-primary-h: 280;   
}
</style>