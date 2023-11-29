<!-- BlogPostView.vue -->
<template>
    <div>
        <h2>{{ postTitle }}</h2><br> 
    </div>
</template>
  
<script>
export default {
    props: ['postId', 'postTitle'],
    // Other component logic
}
</script>
  