<script setup lang="ts">
import Split from "split.js";
import { onMounted } from "vue";

onMounted(() => {
  const splitLR = Split(["#left", "#right"], {
    direction: "horizontal",
    sizes: [70, 30],
    gutterSize: 2,
    cursor: "col-resize",
  });
  const splitTB = Split(["#right-top", "#right-bottom"], {
    direction: "vertical",
    sizes: [70, 30],
    gutterSize: 2,
    cursor: "row-resize",
  });
});
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden">
    <div id="left" class="bg-red-500">
      <div class="block h-full overflow-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius facere,
          assumenda quas, itaque id recusandae temporibus earum esse
          reprehenderit dicta officiis neque, at hic vero asperiores quis quidem
          beatae. Doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Reiciendis soluta distinctio dolorum itaque laboriosam dolor
          ducimus corrupti quia, quos accusamus velit impedit molestiae
          similique voluptatibus officiis harum. Ipsam, hic voluptas? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dolorum
          doloremque soluta saepe rem ipsum, omnis itaque atque quidem unde
          voluptatibus, delectus temporibus minus maiores excepturi. Facilis nam
          unde tempore. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Dignissimos quo voluptas magni rerum quia perferendis veritatis
          ut nesciunt reprehenderit, quos veniam maiores magnam, debitis, totam
          molestiae neque eos ipsum quaerat.
        </p>
      </div>
    </div>
    <div id="right" class="bg-sky-500">
      <div class="flex flex-col h-full">
        <div id="right-top" class="bg-amber-500">
          <div class="block h-full overflow-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              facere, assumenda quas, itaque id recusandae temporibus earum esse
              reprehenderit dicta officiis neque, at hic vero asperiores quis
              quidem beatae. Doloremque. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eius facere, assumenda quas, itaque id
              recusandae temporibus earum esse reprehenderit dicta officiis
              neque, at hic vero asperiores quis quidem beatae. Doloremque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis soluta distinctio dolorum itaque laboriosam dolor
              ducimus corrupti quia, quos accusamus velit impedit molestiae
              similique voluptatibus officiis harum. Ipsam, hic voluptas? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              dolorum doloremque soluta saepe rem ipsum, omnis itaque atque
              quidem unde voluptatibus, delectus temporibus minus maiores
              excepturi. Facilis nam unde tempore. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dignissimos quo voluptas magni rerum
              quia perferendis veritatis ut nesciunt reprehenderit, quos veniam
              maiores magnam, debitis, totam molestiae neque eos ipsum quaerat.
            </p>
          </div>
        </div>
        <div id="right-bottom" class="bg-green-500">
          <div class="block h-full overflow-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              facere, assumenda quas, itaque id recusandae temporibus earum esse
              reprehenderit dicta officiis neque, at hic vero asperiores quis
              quidem beatae. Doloremque. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eius facere, assumenda quas, itaque id
              recusandae temporibus earum esse reprehenderit dicta officiis
              neque, at hic vero asperiores quis quidem beatae. Doloremque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis soluta distinctio dolorum itaque laboriosam dolor
              ducimus corrupti quia, quos accusamus velit impedit molestiae
              similique voluptatibus officiis harum. Ipsam, hic voluptas? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              dolorum doloremque soluta saepe rem ipsum, omnis itaque atque
              quidem unde voluptatibus, delectus temporibus minus maiores
              excepturi. Facilis nam unde tempore. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dignissimos quo voluptas magni rerum
              quia perferendis veritatis ut nesciunt reprehenderit, quos veniam
              maiores magnam, debitis, totam molestiae neque eos ipsum quaerat.
            </p>
          </div>
        </div>
      </div>
    </div>
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
