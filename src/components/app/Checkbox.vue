<template>
  <label class="checkbox-block">
    <input
      type="checkbox"
      class="checkbox-block__input"
      :checked="isChecked"
      @change="$emit('change', $event.target.checked)"
    />
    <span class="checkbox-block__icon"></span>
    <span class="checkbox-block__text">
      {{ text }}
    </span>
  </label>
</template>

<script>
export default {
  name: 'checkbox-block',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    isChecked: Boolean,
    text: {
      type: String,
      required: '',
    },
  },
};
</script>

<style lang="scss">
.checkbox-block {
  position: relative;
  display: flex;

  &__input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__icon {
    cursor: pointer;
    position: relative;
    opacity: 1;
    transition: opacity $A;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
      border-radius: 2px;
      background: $white;
      transition: border-color $A;
      border: 1px solid #e9e9e9;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 16px;
      height: 16px;
      background-image: get-icon('Checkbox');
      opacity: 0;
      transition: opacity $A;
    }
  }

  &__input:checked + &__icon::before {
    border-color: $accent;
  }

  &__input:checked + &__icon::after {
    opacity: 1;
  }

  &__text {
    font-size: rem(12);
    line-height: 17px;
    padding-left: 26px;
  }
}
</style>
