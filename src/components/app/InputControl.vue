<template>
  <div class="input-group" :class="{ 'input-group--password': this.innerType === 'password' }">
    <div class="input-group__label-box">
      <label class="input-group__label" :for="generatedId">{{ label }}</label>
      <span
        class="input-group__tooltip"
        :content="tooltip"
        v-tippy="{ theme: 'light', trigger: 'click' }"
      >
        ?
      </span>
    </div>
    <input
      v-if="innerType === 'phone'"
      class="input-group__input"
      :type="inputTypeNative"
      :id="generatedId"
      :placeholder="placeholder | VMask('+7 (###) ###-####')"
      @input="handleInput"
      :value="innerValue"
      v-bind="$attrs"
      v-mask="'+7 (###) ###-####'"
    />
    <input
      v-else
      class="input-group__input"
      :type="inputTypeNative"
      :id="generatedId"
      :placeholder="placeholder"
      @input="handleInput"
      :value="innerValue"
      v-bind="$attrs"
    />
    <button
      v-if="passwordIcon"
      @click="changePasswordVisible"
      type="button"
      class="input-group__password-btn"
    >
      <SvgIcon class="input-group__password-btn-icon" :name="passwordIconName"></SvgIcon>
    </button>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  name: 'InputControl',
  components: {
    SvgIcon: () => import('@/components/app/SvgIcon'),
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    tooltip: {
      type: String,
      required: true,
    },
  },
  data: vm => ({
    innerType: vm.type,
    innerValue: vm.value,
    generatedId: null,
    passwordIcon: false,
  }),
  mounted() {
    this.generatedId = nanoid();
    this.passwordIcon = this.innerType === 'password' ? true : false;
  },
  computed: {
    passwordVisible() {
      return this.innerType === 'password' ? true : false;
    },
    passwordIconName() {
      return this.passwordVisible ? 'hide' : 'show';
    },
    inputTypeNative() {
      return this.innerType === 'phone' ? 'text' : this.innerType;
    },
  },
  methods: {
    handleInput(event) {
      this.innerValue = event.target.value;
      this.$emit('input', event.target.value);
    },
    changePasswordVisible() {
      if (this.innerType !== 'password') {
        this.innerType = 'password';
      } else {
        this.innerType = 'text';
      }
    },
  },
};
</script>

<style lang="scss">
.input-group {
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  padding: 6px 12px 5px;
  position: relative;

  &__label-box {
    display: flex;
  }

  &__label {
    letter-spacing: 0.03em;
    font-size: 10px;
    line-height: 13px;
    color: $dark-gray;
  }

  &__tooltip {
    cursor: pointer;
    display: inline-block;
    border-radius: 50%;
    @include size(13px);
    border: 1px solid #e0e0e0;
    font-size: 9px;
    line-height: 13px;
    text-align: center;
    margin-left: 6px;
  }

  &__input {
    border: 0;
    width: 100%;
    font-size: rem(14);
    margin-top: 14px;
    color: $black;
    line-height: 24px;
    padding: 0;

    @include placeholder {
      color: $dark-gray;
    }
  }

  &__input[type='password'] {
    letter-spacing: 0.2em;
  }

  &__password-btn {
    @include button-reset;
    display: flex;
    position: absolute;
    right: 20px;
    top: 25px;
  }

  &__password-btn-icon {
    @include size(14px);
  }

  // password
  &--password {
    padding-right: 43px;
  }
}
</style>
