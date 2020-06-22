<template>
  <button :type="nativeType" class="btn" :class="rootClass" @click="handleClick" v-bind="$attrs">
    <span v-if="loading" class="btn__loading">
      <loader class="btn__loader" :is-white="isWhiteLoader" />
    </span>
    <template v-else>
      <span v-if="type === 'vk'" class="btn__content">
        <SvgIcon class="btn__icon" name="vk" /> Вконтакте
      </span>
      <span v-else-if="type === 'fb'" class="btn__content">
        <SvgIcon class="btn__icon" name="facebook" /> FACEBOOK
      </span>
      <span v-else-if="type === 'icloud'" class="btn__content">
        <SvgIcon class="btn__icon" name="icloud" /> icloud
      </span>
      <span v-else-if="type === 'google'" class="btn__content">
        <SvgIcon class="btn__icon" name="google" /> GMAIL
      </span>
      <span v-else class="btn__content">
        <slot>Отправить</slot>
      </span>
    </template>
  </button>
</template>

<script>
export default {
  name: 'ButtonControl',
  components: {
    SvgIcon: () => import('@/components/app/SvgIcon'),
    loader: () => import('@/components/app/Loader'),
  },
  props: {
    nativeType: {
      type: String,
      default: 'button',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    isWhiteLoader: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'default', // 'secondary' || 'link'
    },
    isBlock: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  computed: {
    rootClass() {
      return [
        {
          'btn--secondary': this.type === 'secondary',
          'btn--link': this.type === 'link',
          'btn--vk': this.type === 'vk',
          'btn--fb': this.type === 'fb',
          'btn--icloud': this.type === 'icloud',
          'btn--google': this.type === 'google',
          'btn--large': this.size === 'large',
          'btn--loading': this.loading,
          'btn--block': this.isBlock,
        },
      ];
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style lang="scss">
.btn {
  $this: &;
  @include button-reset;
  position: relative;
  display: inline-flex;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  border-radius: 2px;
  letter-spacing: 0.05em;
  overflow: hidden;
  font-weight: 600;
  font-size: 9px;
  border: 1px solid $gray;
  transition: border-color $A, background-color $A;
  padding: 0 20px;
  height: 40px;

  &__content {
    margin: auto;
  }

  &:hover {
    border-color: $accent;
  }

  &__loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    display: flex;
    align-items: center;
  }

  &__icon {
    @include size(16px);
    margin-right: 6px;
  }

  // size large
  &--large {
    height: 57px;
    padding: 0 38px;
    font-size: 13px;
  }

  // block
  &--block {
    display: flex;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
  }

  // type secondary
  &--secondary {
    z-index: 1;
    color: $white;
    background-image: linear-gradient(152.36deg, #72af32 0%, #4b9b3f 100%),
      linear-gradient(35.11deg, #6c9e39 1.93%, #79b041 98.89%);
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(35.11deg, #6c9e39 1.93%, #79b041 98.89%),
        linear-gradient(152.36deg, #72af32 0%, #4b9b3f 100%);
      z-index: -1;
      transition: opacity $A;
      border-radius: 2px;
      opacity: 0;
    }
    &:hover::before {
      opacity: 1;
    }
  }

  // type google
  &--google {
    border: none;
    background: #efefef;
    &:hover {
      background: darken(#efefef, 10%);
    }
  }

  // type fb
  &--fb {
    border: none;
    background: #39569a;
    color: $white;
    &:hover {
      background: darken(#39569a, 10%);
    }
  }

  // type vk
  &--vk {
    border: none;
    background: #5181b8;
    color: $white;
    &:hover {
      background: darken(#5181b8, 10%);
    }
    #{$this}__icon {
      @include size(20px);
    }
  }

  // type icloud
  &--icloud {
    border: none;
    background: #2196f3;
    color: $white;
    &:hover {
      background: darken(#2196f3, 10%);
    }
    #{$this}__icon {
      @include size(20px, 16px);
    }
  }

  // type link
  &--link {
    @include links;
    flex-direction: column;
    text-transform: none;
    background: transparent;
    letter-spacing: normal;
    font-weight: normal;
    height: auto;
  }
}
</style>
