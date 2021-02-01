<template>
  <label>
    <input
      type="checkbox"
      @click="e => $emit('handle-checkbox-click', e.target)"
      :id="category.id"
      :checked="category.isChecked"
    />
    {{ category.name }}
  </label>
</template>

<script>
export default {
  props: ["category"]
};
</script>
