<template>
  <div class="swiper-container swiper-container-father">
    <div class="swiper-wrapper">
      <div class="swiper-page swiper-frist-info swiper-slide">
        <div class="page-common frist-page">
          <people-info class="info-wrapper" :people-info="peopleInfo"/>
          <div class="next-page">
            <p>向上滑动查看下一页</p>
            <span class="iconfont ic_-ic_drop"></span><br>
            <span class="icon-last iconfont ic_-ic_drop"></span>
          </div>
        </div>
      </div>
      <div class="swiper-page swiper-second-info swiper-slide">
        <div class="page-common second-page swiper-container swiper-container-son">
          <div class="swiper-wrapper">
            <div class="swiper-slide"> <prize-area :rank="rank" class="prize-area frist"/></div>
            <div class="swiper-slide"> <prize-area :rank="rank" class="prize-area frist"/></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const title = "海米月报";
import peopleInfo from "./components/people-info";
import prizeArea from "@/components/integral-panpel/prize-area";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "monthly-report",
  data() {
    return {
      showInfo: true,
      peopleInfo: {
        avatar: "1",
        img: "/static/image/person_background.jpg"
      },
      rank: [
        {
          name: "张亮",
          avatar:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543917664461&di=82bb2ddb38b6f349f08b8ae5968c4a8d&imgtype=0&src=http%3A%2F%2Fp2.gexing.com%2FG1%2FM00%2FE3%2F0A%2FrBACFFKexynS4s7uAABxjGHLrJs524.jpg"
        },
        {
          name: "何学儿",
          avatar:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543917664461&di=82bb2ddb38b6f349f08b8ae5968c4a8d&imgtype=0&src=http%3A%2F%2Fp2.gexing.com%2FG1%2FM00%2FE3%2F0A%2FrBACFFKexynS4s7uAABxjGHLrJs524.jpg"
        },
        {
          name: "秦雨天",
          avatar:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543917664461&di=82bb2ddb38b6f349f08b8ae5968c4a8d&imgtype=0&src=http%3A%2F%2Fp2.gexing.com%2FG1%2FM00%2FE3%2F0A%2FrBACFFKexynS4s7uAABxjGHLrJs524.jpg"
        },
        {
          name: "王三多",
          avatar:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543917664461&di=82bb2ddb38b6f349f08b8ae5968c4a8d&imgtype=0&src=http%3A%2F%2Fp2.gexing.com%2FG1%2FM00%2FE3%2F0A%2FrBACFFKexynS4s7uAABxjGHLrJs524.jpg"
        },
        {
          name: "何佳骏",
          avatar:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543917664461&di=82bb2ddb38b6f349f08b8ae5968c4a8d&imgtype=0&src=http%3A%2F%2Fp2.gexing.com%2FG1%2FM00%2FE3%2F0A%2FrBACFFKexynS4s7uAABxjGHLrJs524.jpg"
        }
      ]
    };
  },
  created() {
    this.pageY = null;
  },
  mounted() {
    this.$nextTick(() => {
      this._initScoll();
    });
  },
  methods: {
    _initScoll() {
      new Swiper(".swiper-container-father", {
        direction: "vertical", // 垂直切换选项
        autoHeight:true
      });
      new Swiper(".swiper-container-son", {
        direction: "vertical", // 垂直切换选项
        nested:true,
        autoHeight:true,
        resistanceRatio: 0,
      });
    }
  },
  components: {
    peopleInfo,
    prizeArea
  },
  beforeRouteEnter(to, from, next) {
    next(v => {
      v.preTitle = document.title;
      document.title = new Date().getMonth() + 1 + title;
    });
  }
};
</script>
<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  .swiper-wrapper {
    .swiper-page {
      width: 100%;
      height: 100%;
      .page-common {
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
        &.frist-page {
          display: flex;
          flex-direction: column;
          .info-wrapper {
            width: 100%;
            flex: 1;
            background-color: #fff;
            box-shadow: 0px 0px 14px 0px rgba(168, 168, 168, 0.3);
            border-radius: 6px;
          }
          .next-page {
            height: 35px;
            margin-top: 7px;
            box-sizing: border-box;
            text-align: center;
            font-size: 12px;
            color: #999999;
            .icon-last {
              display: block;
              margin-top: -30px;
            }
          }
        }
        &.second-page {
          // overflow: auto;
          // -webkit-overflow-scrolling: touch;
          height:auto;
          .prize-area {
            margin-top: 20px;
            border-radius: 6px;
            box-shadow: 0px 0px 8px 0px rgba(2, 10, 22, 0.3);
            &.frist {
              margin-top: 0;
            }
          }
        }
      }
    }
  }
}
</style>


