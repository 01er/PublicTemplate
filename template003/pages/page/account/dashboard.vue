<template>
  <div>
    <Header />
    <Breadcrumbs title="Dashboard" />
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <b-card no-body v-bind:class="'dashboardtab'">
            <b-tabs pills card vertical class="waitabs">
              <b-tab title="Account Info" active>
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>My Dashboard</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                      </div>
                      <div class="box-account box-info">
                        <!-- <div class="box-head">
                          <h2>Account Information</h2>
                        </div> -->
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="box">
                              <div class="box-title">
                                <h3>Contact Information</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <h6>MARK JECNO</h6>
                                <h6>MARk-JECNO@gmail.com</h6>
                                <h6>
                                  <a href="#">Change Password</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title" style="margin-bottom:0">
                              <h3>Address Book</h3>
                              <a href="#">New Address</a>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <div class="theme-card">
                                  <h6>Anna</h6>
                                  <h6>西华街129号，华盛顿，纽约，010000，US</h6>
                                  <h6>+001 13846889758</h6>
                                  <div class="row">
                                    <div class="col"><h6><a href="#">Edit Address</a></h6></div>
                                    <div class="col text-right"><b-radio name="some-radios" value="B"><h6>Set Default</h6></b-radio></div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="theme-card">
                                  <h6>Anna</h6>
                                  <h6>西华街129号，华盛顿，纽约，010000，US</h6>
                                  <h6>+001 13846889758</h6>
                                  <div class="row">
                                    <div class="col"><h6><a href="#">Edit Address</a></h6></div>
                                    <div class="col text-right"><b-radio name="some-radios" value="B"><h6>Set Default</h6></b-radio></div>
                                  </div>
                                </div>
                              </div>
                              

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Address Book">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Address Book</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                      </div>
                      <div class="box-account box-info">
                        <div>
                          <div class="box">
                            <div class="box-title" style="margin-bottom:0">
                              <h3>Shipping Address</h3>
                              <a href="#">New Address</a>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <div class="theme-card">
                                  <h6>Anna</h6>
                                  <h6>西华街129号，华盛顿，纽约，010000，US</h6>
                                  <h6>+001 13846889758</h6>
                                  <div class="row">
                                    <div class="col"><h6><a href="#">Edit Address</a></h6></div>
                                    <div class="col text-right"><b-radio name="some-radios" value="B"><h6>Set Default</h6></b-radio></div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="theme-card">
                                  <h6>Anna</h6>
                                  <h6>西华街129号，华盛顿，纽约，010000，US</h6>
                                  <h6>+001 13846889758</h6>
                                  <div class="row">
                                    <div class="col"><h6><a href="#">Edit Address</a></h6></div>
                                    <div class="col text-right"><b-radio name="some-radios" value="B"><h6>Set Default</h6></b-radio></div>
                                  </div>
                                </div>
                              </div>
                              

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="My Orders">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>My orders</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                      </div>
                      <div class="box-account box-info myOrders">
                        <b-card no-body>
                          <b-tabs align="left" content-class="mt-3">
                            <b-tab title="All Orders" active>
                              <div class="order-list">
                                <div class="row">
                                  <div class="col-sm-6 color99">Order：74305170475549570</div>
                                  <div class="col-sm-4 color99 text-right">Amount：14</div>
                                  <div class="col-sm-2 text-right">Total：$2,888.00</div>
                                </div>
                                <div class="row" style="border-bottom:1px solid #EDEDED">
                                  <div class="col-sm-4">
                                    <div class="media">
                                      <img :src='"@/assets/images/2.jpg"'  class="img-fluid" alt />
                                      <div class="media-body align-self-center">
                                        <h6>蓝色Utility Pinafore牛仔连衣裙</h6>
                                        <p>颜色：白色 ；尺码：36</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-2 number text-center">x1</div>
                                  <div class="col-sm-2 money text-center">$1,888.00</div>
                                  <div class="col-sm-2 blacktext text-center">已发货</div>
                                  <div class="col-sm-2 redtext text-right">
                                     <span>物流跟踪</span>  <span>查看详情</span>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-4">
                                    <div class="media">
                                      <img :src='"@/assets/images/2.jpg"'  class="img-fluid" alt />
                                      <div class="media-body align-self-center">
                                        <h6>蓝色Utility Pinafore牛仔连衣裙</h6>
                                        <p>颜色：白色 ；尺码：36</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-2 number text-center">x1</div>
                                  <div class="col-sm-2 money text-center">$1,888.00</div>
                                  <div class="col-sm-2 blacktext text-center">已发货</div>
                                  <div class="col-sm-2 redtext text-right">
                                    <span>物流跟踪</span>  <span>查看详情</span>
                                  </div>
                                </div>
                              </div>
                              <div class="order-list">
                                <div class="row">
                                  <div class="col-sm-6 color99">Order：74305170475549570</div>
                                  <div class="col-sm-4 color99 text-right">Amount：14</div>
                                  <div class="col-sm-2 text-right">Total：$2,888.00</div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-4">
                                    <div class="media">
                                      <img :src='"@/assets/images/2.jpg"'  class="img-fluid" alt />
                                      <div class="media-body align-self-center">
                                        <h6>蓝色Utility Pinafore牛仔连衣裙</h6>
                                        <p>颜色：白色 ；尺码：36</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-2 number text-center">x1</div>
                                  <div class="col-sm-2 money text-center">$1,888.00</div>
                                  <div class="col-sm-2 blacktext text-center">已发货</div>
                                  <div class="col-sm-2 redtext text-right">
                                    <span>物流跟踪</span>  <span>查看详情</span>
                                  </div>
                                </div>
                              </div>
                            </b-tab>
                            <b-tab title="Wait Shipments">
                              <b-card-text>Tab contents 2</b-card-text>
                            </b-tab>
                            <b-tab title="Has Shipments">
                              <b-card-text>Tab contents 3</b-card-text>
                            </b-tab>
                            <b-tab title="Has Arrive">
                              <b-card-text>Tab contents 4</b-card-text>
                            </b-tab>
                          </b-tabs>
                        </b-card>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Newsletter">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Newsletter</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
                        <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium</p>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Change Password">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Change password</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
                        <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium</p>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Account Information</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Contact Information</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <h6>MARK JECNO</h6>
                                <h6>MARk-JECNO@gmail.com</h6>
                                <h6>
                                  <a href="#">Change Password</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Newsletters</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <p>You are currently not subscribed to any newsletter.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Log out">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Log Out</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>Log out From your Account Dashboard. Select a link below to view or edit information.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Account Information</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Contact Information</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <h6>MARK JECNO</h6>
                                <h6>MARk-JECNO@gmail.com</h6>
                                <h6>
                                  <a href="#">Change Password</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Newsletters</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <p>You are currently not subscribed to any newsletter.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>Address Book</h3>
                              <a href="#">Manage Addresses</a>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>Default Billing Address</h6>
                                <address>
                                  You have not set a default billing address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                              <div class="col-sm-6">
                                <h6>Default Shipping Address</h6>
                                <address>
                                  You have not set a default shipping address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </section>
    <Footer />
    <deliveryDetails />
  </div>
</template>
<script>
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
import deliveryDetails from '../../../components/widgets/delivery-details'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    deliveryDetails,
  }
}
</script>
