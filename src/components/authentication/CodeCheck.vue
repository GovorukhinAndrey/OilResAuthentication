<template>
  <div class="code-check">
    <h2 class="title">Введите код</h2>
    <form class="code-check__form">
      <CodeInput v-model="code"></CodeInput>
    </form>
    <div class="code-check__group">
      <div class="code-check__group-item">
        <span class="code-check__countdown dark-gray">Через 59 сек</span>
        <ButtonControl class="dark-gray" type="link">Отправить ещё</ButtonControl>
      </div>
      <div class="code-check__group-item code-check__group-item--right">
        <ButtonControl type="link">Изменить номер</ButtonControl>
        <ButtonControl type="link">Не приходит СМС?</ButtonControl>
      </div>
    </div>
  </div>
</template>

<script>
// import SecurityCode from 'vue-security-code';
import CodeInput from '@/components/app/SecurityCode';
export default {
  components: {
    CodeInput,
    ButtonControl: () => import('@/components/app/ButtonControl'),
  },
  data: () => ({
    code: '',
  }),
  methods: {
    onChange(v) {
      console.log('onChange ', v);
    },
    onComplete(v) {
      console.log('onComplete ', v);
    },
  },
};
</script>

<style lang="scss">
.code-check {
  &__form {
    display: flex;
    margin: 30px 0;
  }

  &__group {
    display: flex;
    justify-content: space-between;
  }

  &__group-item {
    display: flex;
    flex-direction: column;

    &--right {
      align-items: flex-end;
    }
  }

  &__countdown {
    font-size: 12px;
    line-height: 24px;
  }
}
</style>
