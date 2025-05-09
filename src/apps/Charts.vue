<template>
    <div ref="chartRef" style="width: 100vw; height: 100vh;"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import { data, year_end_bonus } from './data.js' // 你提供的工资数据

const chartRef = ref(null)

onMounted(() => {
    const chart = echarts.init(chartRef.value, 'dark')

    // 处理数据
    const months = data.map(item => item.month)
    const taxData = data.map(item => item.tax)
    const insuranceData = data.map(item => item.insurance)
    const realIncomeData = data.map(item =>
        +(item.salary - item.tax - item.insurance).toFixed(2)
    )

    // 计算累计总收入
    let totalSalary = data.reduce((sum, item) => sum + item.salary, 0)
    totalSalary = (year_end_bonus.reduce((sum, item) => sum + item.salary, 0) + totalSalary).toFixed(2)

    let totalTax = data.reduce((sum, item) => sum + item.tax, 0)
    totalTax = (year_end_bonus.reduce((sum, item) => sum + item.tax, 0) + totalTax).toFixed(2)

    const totalInsurance = data.reduce((sum, item) => sum + item.insurance, 0).toFixed(2)
    const totalNet = (totalSalary - totalTax - totalInsurance).toFixed(2)

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        legend: {
            data: ['到手', '个税', '保险']
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: months
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '到手',
                type: 'bar',
                stack: '总收入',
                data: realIncomeData
            },
            {
                name: '保险',
                type: 'bar',
                stack: '总收入',
                data: insuranceData
            },
            {
                name: '个税',
                type: 'bar',
                stack: '总收入',
                data: taxData
            },
            {
                name: '',
                type: 'pie',
                radius: ['0%', '25%'],
                center: ['15%', '25%'], // 右上角
                label: {
                    formatter: '{b}: ¥{c}',
                    fontSize: 12
                },
                tooltip: {
                    formatter: '{b}: ¥{c}'
                },
                data: [
                    { value: totalTax, name: '个税' },
                    { value: totalInsurance, name: '保险' },
                    { value: totalNet, name: '到手' }
                ]
            }
        ],
        graphic: [
            {
                type: 'text',
                left: '5%',
                top: '10%',
                style: {
                    text: `总收入：¥${totalSalary}`,
                    font: 'bold 14px sans-serif',
                    fill: '#ccc'
                }
            }
        ]
    }

    chart.setOption(option)

    // resize 支持响应式
    window.addEventListener('resize', () => {
        chart.resize()
    })
})
</script>