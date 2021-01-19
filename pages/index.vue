<template>
  <div class="container">
    <div>
      <NuxtLink to="/main">Go Main</NuxtLink>
    </div>
    <div class="p-grid button-demo">
      <div class="p-col-12 p-md-6">
        <div class="card">
          <h5 @click="clickTest($event)">Default</h5>
          <Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
          <Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
          <Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
          <button type="button" @click="clickTest($event)">button click</button>
        </div>
      </div>
    </div>
    <div class="p-grid button-demo">
      <div class="p-col-12 p-md-6">
        <div class="card">
          <h5 @click="clickTest($event)">Default</h5>
          <Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
          <Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
          <Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
          <button type="button" @click="clickTest($event)">button click</button>
        </div>
      </div>
    </div>
    <div class="p-grid button-demo">
      <div class="p-col-12 p-md-6">
        <div class="card">
          <h5 @click="clickTest($event)">Default</h5>
          <Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
          <Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
          <Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
          <button type="button" @click="clickTest($event)">button click</button>
        </div>
      </div>
    </div>
    <div class="p-grid button-demo">
      <div class="p-col-12 p-md-6">
        <div class="card">
          <h5 @click="clickTest($event)">Default</h5>
          <Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
          <Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
          <Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
          <button type="button" @click="clickTest($event)">button click</button>
        </div>
      </div>
    </div>
    <div class="p-grid button-demo">
      <div class="p-col-12 p-md-6">
        <div class="card">
          <h5 @click="clickTest($event)">Default</h5>
          <Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
          <Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
          <Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
          <button type="button" @click="clickTest($event)">button click</button>
        </div>
      </div>
    </div>
    <div class="p-grid button-demo">
      <div class="p-col-12 p-md-6">
        <div class="card">
          <h5 @click="clickTest($event)">Default</h5>
          <Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
          <Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
          <Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
          <button type="button" @click="clickTest($event)">button click</button>
        </div>
      </div>
    </div>
    <div class="p-grid button-demo">
      <div class="p-col-12 p-md-6">
        <div class="card">
          <h5 @click="clickTest($event)">Default</h5>
          <Button type="button" class="p-mr-2 p-mb-2" @click.native="clickTest($event)">Test Button</Button>
          <Button type="button" label="test" class="p-mr-2 p-mb-2" @click="clickTest($event)"></Button>
          <Button label="Disabled" class="p-mr-2 p-mb-2" :disabled="true"></Button>
          <button type="button" @click="clickTest($event)">button click</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods : {
    clickTest(event) {
      console.log('click test : ', event)

      return false;
    }
  }
}
</script>

<style>
</style>
