<template>
  <h1>Searching...</h1>
  <div>
    <autocomplete :items="list1" @select="onSelectList1" @unselect="onUnselectList1" class="autocomplete"/>
    For your first choice, you have selected : {{selectedItem1?.Label}}
  </div>
  <div>
    <autocomplete :items="list1" @select="onSelectList2" @unselect="onUnselectList2" class="autocomplete"/>
    For your second choice, you have selected : {{selectedItem2?.Label}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Autocomplete from './components/Autocomplete.vue';
import { AutocompleteItem } from './viewmodels/IAutocompleteItem';

export default defineComponent({
  name: 'App',
  components: {
    Autocomplete
  },
  setup() {
    const list1 = new Array<AutocompleteItem>();
    list1.push(new AutocompleteItem(1, 'Item 1'));
    list1.push(new AutocompleteItem(2, 'Another item'));
    list1.push(new AutocompleteItem(3, 'An item with a long label'));
    list1.push(new AutocompleteItem(4, 'Item XXX'));
    list1.push(new AutocompleteItem(5, 'A specific item'));
    list1.push(new AutocompleteItem(6, 'The coolest item'));

    const selectedItem1 = ref<AutocompleteItem>();

    const onSelectList1 = (item: AutocompleteItem) => {
      selectedItem1.value = item;
    };

    const onUnselectList1 = () => {
      selectedItem1.value = undefined;
    };

    const selectedItem2 = ref<AutocompleteItem>();

    const onSelectList2 = (item: AutocompleteItem) => {
      selectedItem2.value = item;
    };

    const onUnselectList2 = () => {
      selectedItem2.value = undefined;
    };

    return {
      list1,
      onSelectList1,
      selectedItem1,
      onUnselectList1,
      onSelectList2,
      selectedItem2,
      onUnselectList2
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.autocomplete {
  width: 20%;
  float: left;
  margin: 0 40%;
  position: relative;
}
</style>
