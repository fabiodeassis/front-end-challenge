<template>
  <div class="client">
    <h1>This is an Client page</h1>
    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>
</template>
