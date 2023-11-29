<template>
    <div class="blog-detail">
        <h2>{{ post.title }}</h2>
        <p class="text-muted">{{ post.date }}</p>
        <p>{{ post.content }}</p>
    </div>
</template>
  
<script>
export default {
    props: ['post'],
};
</script>
  