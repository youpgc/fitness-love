<template>
    <div class="diary-info diary-temp dflex-between">
        <div class="diary-info-item">
        <div class="diary-info-label">Your goal</div>
        <div class="diary-info-blod">Gain weight</div>
        </div>
        <div class="diary-info-item">
        <div class="diary-info-label">Latest weight, Jan 22</div>
        <div class="dflex-between">
            <div class="diary-info-item f50 tr">74<span class="f32"> kg</span></div>
            <div class="diary-info-item"><img class="diary-info-trend" :src="trend"></div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["info"],
    name: 'info',
    data(){
        return {
            trend: require('@/assets/images/icon-03.png')
        }
    }
}
</script>

<style scoped>
  .diary-info{
    width: 100%;
    height: 1.85rem;
    position: relative;
  }
  .diary-info::after{
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,0);
    height: 100%;
    border: 0.5px solid #ddd;
  }
  .diary-info-item{
    width: 100%;
    padding: 0.3rem 0;
  }
  .diary-info-label{
    font-size: 0.3rem;
    color: #6d819c;
  }
  .diary-info-blod{
    line-height: 1rem;
    font-size: 0.5rem;
  }
  .diary-info-trend{
    width: 1.06rem;
    height: 0.54rem;
  }
</style>