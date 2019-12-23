<template>
    <div class="loading-component">
        <span class="spin"></span>
    </div>
</template>
<script>
export default {
  name: 'Loading'
}
</script>
<style scoped lang="scss">
.loading-component {
    padding: 15px;
    text-align: center;
    .spin {
        border: 3px dotted var(--grey-light);
        border-radius: 50%;
        border-top-color: transparent;
        display: inline-block;
        height: 26px;
        width: 26px;
        animation: spin 1s infinite linear
    }
}

@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
</style>
