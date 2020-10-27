<template>
    <div>
      <input v-model="query" @input="search"/><button @click="onUnselect">x</button>
      <ul class="results" v-if="results.length">
        <li v-for="item in results" :key="item.Id" @click="onSelectItem(item)">
          {{ item.Label }}
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IAutocompleteItem } from '@/viewmodels/IAutocompleteItem';

export default defineComponent({
  props: {
    items: {
      type: Object as () => Array<IAutocompleteItem>,
      required: true
    }
  },
  emits: {
    select: (item: IAutocompleteItem) => item,
    unselect: () => true
  },
  setup(props, context) {
    const query = ref('');
    const results = ref<Array<IAutocompleteItem>>([]);

    const search = () => {
      results.value = !query.value ? 
        [] :
        props.items.filter((item: IAutocompleteItem) => {
          return item.Label.includes(query.value);
        });
    };

    const onSelectItem = (item: IAutocompleteItem) => {
      query.value = "";
      results.value = [];
      context.emit("select", item);
    };

    const onUnselect = () => {
      query.value = "";
      results.value = [];
      context.emit("unselect");
    }

    return {
      query,
      search,
      results,
      onSelectItem,
      onUnselect
    } 
  }
})
</script>

<style scoped>
input {
  width: 80%;
  padding: 5pt 2pt;
}
button {
  padding: 5pt 8pt;
}
.results {
  border: 1px solid #eeddee;
  margin-top: 0;
  width: 100%;
  padding: 3px;
  position: absolute;
  background: #fff;
  z-index: 999;
}
.results li {
  list-style: none;
  padding: 8pt 0;
  text-align: left;
  border-bottom: 1px solid #eeddee;
}
.results li:hover {
    background: #66468f;
    color: #fff;
    cursor: default;
}
</style>