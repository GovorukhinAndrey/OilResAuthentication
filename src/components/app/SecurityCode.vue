<template>
  <div class="security-code-wrap">
    <label :for="`code-${uuid}`">
      <ul :class="`${theme}-container security-code-container`">
        <li class="field-wrap" v-for="(item, index) in length" :key="index">
          <i class="char-field">{{ value[index] || placeholder }}</i>
        </li>
      </ul>
    </label>
    <input
      ref="input"
      class="input-code"
      @keyup="handleInput($event)"
      v-model="value"
      :id="`code-${uuid}`"
      :name="`code-${uuid}`"
      type="tel"
      :maxlength="length"
      autocorrect="off"
      autocomplete="off"
      autocapitalize="off"
    />
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  name: 'SecurityCode',
  // component properties
  props: {
    length: {
      type: Number,
      default: 4,
    },
    placeholder: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'block',
    },
  },
  // variables
  data() {
    return {
      value: '',
    };
  },
  computed: {
    uuid() {
      return nanoid();
    },
  },
  methods: {
    hideKeyboard() {
      document.activeElement.blur(); // ios
      this.$refs.input.blur(); // android
    },
    handleSubmit() {
      this.$emit('input', this.value);
    },
    handleInput(e) {
      if (e.target.value.length >= this.length) {
        this.hideKeyboard();
      }
      this.handleSubmit();
    },
  },
};
</script>

<style scoped lang="scss">
label {
  width: 100%;
}
.security-code-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.security-code-container {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  .field-wrap {
    list-style: none;
    display: block;
    line-height: 54px;
    font-size: 24px;
    background: $white;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    @include size(65px, 56px);
    text-align: center;
    .char-field {
      font-style: normal;
    }
  }
}
.block-container {
  .field-wrap {
    background-color: $white;
    margin: 2px;
    color: $black;
  }
}
.line-container {
  position: relative;
  background-color: $white;
  &::after {
    box-sizing: border-box;
    content: '';
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    position: absolute;
    border: 1px solid #d9d9d9;
    top: 0;
    left: 0;
    transform-origin: 0 0;
    border-radius: 4px;
  }
  .field-wrap {
    flex: 1;
    position: relative;
    &:not(:last-child):after {
      content: '';
      width: 1px;
      height: 50%;
      position: absolute;
      right: 0;
      top: 25%;
      background-color: #d9d9d9;
      transform: scaleX(0.5);
    }
  }
}
.input-code {
  position: absolute;
  left: -9999px;
  top: -9999px;
}
</style>
