<template>
    <div>
      <slot
        v-if="err"
        name="error"
        v-bind:err="err"
        v-bind:vm="vm"
        v-bind:info="info"
      >Oopppssssssssssssssssssssssss</slot>
      <slot v-else></slot>
    </div>
  </template>

<script>
export default {
    name: 'ErrorPage',
    props: {
        stopPropagate: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            err: false,
            vm: null,
            info: null
        }
    },
    errorCaptured(err, vm, info) {
        if (this.stopPropagate) {
            return false;
        }
        this.err = err;
        this.vm = vm;
        this.info = info;
        return true;
    }
};
</script>

<style lang="scss" scoped>
</style>
