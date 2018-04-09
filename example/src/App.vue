<template>
  <div id="app">
    <header class="header">
      <h1 class="title">Vue ripple directive</h1>
      <div class="btns">
        <button class="btn" v-ripple><a href="https://github.com/xrei/v-ripple" title="Github">Github</a></button>
        <button class="btn" v-ripple style="background-color: #cb3837"><a href="" title="NPM">NPM</a></button>
      </div>
    </header>
    <main class="container">
      <div class="description">
        Click on these blocks to see the effect!
      </div>
      <div class="grid">
        <div class="box"
          v-for="(b,i) in 7"
          :key="i"
          v-ripple
        ></div>
      </div>
      <div class="grid">
        <div class="circle"
          v-for="(c, i) in 7"
          :key="i"
          v-ripple
        ></div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() { 
    return {
    }
  }
}
</script>

<style lang="stylus">
*
  padding 0
  margin 0
  box-sizing border-box

body, html
  font-family 'Open Sans'
  line-height 1.5
  color rgba(69, 90, 100, 1)

a
  text-decoration none
  color inherit

#app
  margin 0 auto
  width 1000px
  height 100vh

.btn
  align-items center
  border-radius 2px
  border 0
  display inline-flex
  height 36px
  flex 0 1 auto
  font-family 'Roboto'
  font-size 16px
  font-weight 500
  text-transform uppercase
  justify-content center
  margin .5rem 0
  min-width 8rem
  outline 0
  text-decoration none
  transition-property color, background-color
  transition .3s cubic-bezier(.25,.8,.25,1)
  position relative
  cursor pointer
  background-color rgba(83, 109, 254, 1)
  color #fff
  box-shadow 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
  &:hover
    background-color rgba(61, 90, 254, 1)
.header
  margin-top 2rem
  display flex
  flex-flow column
  justify-content center
  align-items center
  .title
    color rgba(33, 150, 243, 1)
    font-weight 500
    font-size 36px

.container
  margin-top 2rem
  .description
    font-weight normal
    font-size 24px
  .grid
    margin-top 1rem
    display grid
    grid-template-columns repeat(7,1fr)
    grid-gap 0vw

.box
  background-color #fff
  cursor pointer
  width 128px
  height 128px
  box-shadow 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
.circle
  border-radius 50%
  background-color #fff
  cursor pointer
  width 128px
  height 128px
  box-shadow 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
</style>
