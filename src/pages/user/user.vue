<template>
  <div>
    <section class="profile">
      <headerTop class="headerTop" title="我的"></headerTop>
      <section class="profile-number">
        <router-link to="/login" class="profile-link">
          <div class="profile_image">
            <i class="iconfont icon-profile"></i>
          </div>
          <div class="user-info">
            <p class="user-info-top">
              {{userInfo || '登录/注册'}}
            </p>
            <p class="user-p">
              <span class="user-icon">
                <i class="iconfont icon-mobile">

                </i>
              </span>
              <span class="icon-mobile-number">
                {{'暂无绑定手机号'}}
              </span>
            </p>
          </div>
          <span class="arrow">
            <i class="iconfont icon-right"></i>
          </span>
        </router-link>
      </section>

      <section class="profile_info_data">
        <ul class="info_data_list">
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">
              <span class="color_yuan">0.00</span>元
            </span>
            <span class="info_data_bottom">
              我的余额
            </span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span class="color_ge">0</span>个</span>
            <span class="info_data_bottom">我的优惠</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span class="color_fen">0</span>分</span>
            <span class="info_data_bottom">我的积分</span>
          </a>
        </ul>
      </section>

      <section class="profile_my_order">
        <a href="javascript:" class="my_order">
          <span class="span_iconfont">
            <i class="iconfont icon-calendar"></i>
          </span>
          <div class="my_order_div">
            <span class="span_my_order">我的订单</span>
            <span class="my_order_icon">
              <i class="iconfont icon-right"></i>
            </span>
          </div>
        </a>

        <a href="javascript:" class="my_order">
          <span class="span_iconfont">
            <i class="iconfont icon-ticket_money_fill"></i>
          </span>
          <div class="my_order_div">
            <span class="span_my_order">积分商城</span>
            <span class="my_order_icon">
              <i class="iconfont icon-right"></i>
            </span>
          </div>
        </a>

        <a href="javascript:" class="my_order">
          <span class="span_iconfont">
            <i class="iconfont icon-round_crown_fill"></i>
          </span>
          <div class="my_order_div">
            <span class="span_my_order">Mint外卖会员卡</span>
            <span class="my_order_icon">
              <i class="iconfont icon-right"></i>
            </span>
          </div>
        </a>
      </section>

      <section class="profile_my_order_fuwu">
        <a href="javascript:" class="my_order">
          <span class="span_iconfont">
            <i class="iconfont icon-mark"></i>
          </span>
          <div class="my_order_div">
            <span class="span_my_order">服务中心</span>
            <span class="my_order_icon">
              <i class="iconfont icon-right"></i>
            </span>
          </div>
        </a>
      </section>

      <section></section>
    </section>
  </div>
</template>

<script>
import headerTop from "../../components/headerTop/headerTop"
import {mapState} from 'vuex'

export default {
  components: {
    headerTop
  },
  computed: {
    ...mapState(['userInfo']),
  },
}
</script>

<style lang="scss" scoped>
.profile {
  overflow: hidden;
  .profile-number {
    margin-top: 46px;
    border-top: 1px solid #ccc;
  }
    .profile-link {
      display: flex;
      height: 120px;
      background-color: #02a774;
      .profile_image {
        flex: 2;
        .icon-profile {
          font-size: 70px;
          color: #fff;
          line-height: 120px;
        }
      }
      .user-info {
        flex: 7;
        .user-info-top {
          height: 60px;
          padding-top: 30px;
          padding-left: 10px;
          box-sizing: border-box;
          color: #fff;
          font-weight: 700;
        }
        .user-p {
          height: 60px;
          float: left;
          .user-icon {
            display: inline-block;
            vertical-align: text-top;
            .icon-mobile {
            font-size: 35px;
            color: #fff;           
            }
          }        
          .icon-mobile-number {
            display: inline-block;
            color: #fff;
          }
        }
      }
      .arrow {
        flex: 1;
        line-height: 120px;
        color: #fff;
      }
    }
  .profile_info_data {
    height: 100px;
    width: 100%;
    background-color: #fff;
    border-bottom: 10px solid #ccc;
    .info_data_list {
      display: flex;
      a:nth-child(2) {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
      }
      .info_data_link {
        flex: 33%;
        display: block;
        height: 100px;
        .info_data_top {
          display: block;
          height: 60%;
          text-align: center;
          font-size: 14px;
          color: #333;
          padding: 25px 10px 5px 15px;
          box-sizing: border-box;
          span {
            font-size: 30px;
            font-weight: 700;          
          }
          .color_yuan {
            color: #ff5f3e;
          }
          .color_ge {
            color: red;
          }
          .color_fen {
            color: #6ac20b;
          }
        }
        .info_data_bottom {
          display: block;
          height: 40%;
          text-align: center;
          font-size: 14px;
          color: #666;
          font-weight: 400;
          padding-top: 10px;
          box-sizing: border-box;
        }
      }
    }
  }
  .profile_my_order {
    background-color: #fff;
    height: 150px;
    display: flex;
    flex-direction: column;
    a {
      display: block;
      flex: 1;
      display: flex;
      .span_iconfont {
        flex: 1;
        .icon-calendar {
        font-size: 30px;
        padding-left: 5px;
        line-height: 50px;
        color: #02a774;
        }
      }      
      .my_order_div {
        flex: 9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
        color: #333;
        .span_my_order {
          flex: 1;
        }
        .my_order_icon {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          .icon-right {
            padding-right: 5px;
            color: #ccc;
          }
        }       
      }
    }
    a {
      display: block;
      flex: 1;
      display: flex;
      .span_iconfont {
        flex: 1;
        .icon-ticket_money_fill {
        font-size: 30px;
        padding-left: 5px;
        line-height: 50px;
        color: #ff5f3e;
        }
      }      
      .my_order_div {
        flex: 9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        .span_my_order {
          flex: 1;
        }
        .my_order_icon {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          .icon-right {
            padding-right: 5px;
            color: #ccc;
          }
        }       
      }
    }
    a {
      display: block;
      flex: 1;
      display: flex;
      .span_iconfont {
        flex: 1;
        .icon-round_crown_fill {
        font-size: 30px;
        padding-left: 5px;
        line-height: 50px;
        color: #f90;
        }
      }      
      .my_order_div {
        flex: 9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        .span_my_order {
          flex: 1;
        }
        .my_order_icon {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          .icon-right {
            padding-right: 5px;
            color: #ccc;
          }
        }       
      }
    }
  }
  .profile_my_order_fuwu {
    background-color: #fff;
    height: 50px;
    display: flex;
    a {
      display: block;
      flex: 1;
      display: flex;
      .span_iconfont {
        flex: 1;
        .icon-mark {
        font-size: 30px;
        padding-left: 5px;
        line-height: 50px;
        color: #02a774;
        }
      }      
      .my_order_div {
        flex: 9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
        color: #333;
        .span_my_order {
          flex: 1;
        }
        .my_order_icon {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          .icon-right {
            padding-right: 5px;
            color: #ccc;
          }
        }       
      }
    }
  }
}
</style>