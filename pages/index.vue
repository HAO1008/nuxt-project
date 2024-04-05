<template>
    <div>
        Index
    </div>
</template>

<script setup>
useHead({
    title: 'Index Head',
    titleTemplate: (title) => {
        return `${title} - 測試測試'`
    },
    meta: [
        { name: 'title', content: 'Index 測試~~~' },
    ],
})
</script>