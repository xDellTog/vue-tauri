<script setup lang="ts">
import Split from "split.js";
import { onMounted, ref, useSlots, withDirectives, onBeforeUpdate } from "vue";

interface SplitProps {
  direction?: "horizontal" | "vertical";
  sizes?: number[];
  gutterSize?: number;
  cursor?: string;
}

const split = ref<Split.Instance | null>(null);

const {
  direction = "horizontal",
  sizes = [50, 50],
  gutterSize = 1,
  cursor = "col-resize",
} = defineProps<SplitProps>();

const panel1 = ref(null);
const panel2 = ref(null);
const slots = useSlots();

onMounted(() => {
  //   console.log(slots.default());
  //   let node = slots.default && slots.default()[0];
  //   if (node) {
  //     node = withDirectives(node, [
  //       [
  //         {
  //           mounted(el) {
  //             console.log(el);
  //           },
  //         },
  //       ],
  //     ]);
  //     return node;
  //   }
  //   console.log(node);

  if (panel1 && panel2) {
    split.value = Split([slots.default()[0], slots.default()[1]], {
      direction,
      sizes,
      gutterSize,
      cursor,
    });
  }
});
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden">
    <slot />
  </div>
</template>

<style>
.gutter.gutter-vertical {
  transition: background-color 500ms ease-in-out;
  background-color: white;
  cursor: row-resize;
}
.gutter.gutter-vertical:hover {
  background-color: cyan;
}

.gutter.gutter-horizontal {
  transition: background-color 500ms ease-in-out;
  background-color: white;
  cursor: col-resize;
}
.gutter.gutter-horizontal:hover {
  background-color: cyan;
}
</style>
