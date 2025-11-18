<script setup>
import { computed, ref, watch } from 'vue'
import { useCollection, useDocument } from 'vuefire'
import { collection, doc } from 'firebase/firestore'
import {db} from '../firebase_conf'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const test_source = computed(() =>
    doc(db, 'Test', route.params.id)
)

const tester = useDocument(test_source)

watch(tester, (new_data, old_data)=>{
  if (! new_data) {
    router.push("/")
  }
})

</script>

<template>
  <RouterLink :to="{ name: 'test_w_id', params: { id: 'hT93tGRYXle0YwBrTEHy' } }">test</RouterLink>

  {{tester}}
</template>

<style scoped></style>