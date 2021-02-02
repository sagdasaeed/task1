<template style="background-image: url('../assets/Charitable-giving.jpg')">
  <div class="edit1">
    <div class="container">
      <div class="col-md-12 well" id="rightPanel">
        <div class="row">
          <div class="col-md-12">
            <form role="form">
              <div class="h2text">
                <h2>Edit your profile.<small>It's always easy</small></h2>
              </div>
              <hr class="colorgraph" />
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      class="form-control input-lg"
                      placeholder="User-Name"
                      tabindex="1"
                    />
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="credit"
                      id="credit"
                      class="form-control input-lg"
                      placeholder="Credit Card number"
                      tabindex="2"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control input-lg"
                  placeholder="Email Address"
                  tabindex="4"
                />
              </div>
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form-control input-lg"
                      placeholder="New Password"
                      tabindex="5"
                    />
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="password"
                      name="password_confirmation"
                      id="password_confirmation"
                      class="form-control input-lg"
                      placeholder="Confirm Password"
                      tabindex="6"
                    />
                  </div>
                </div>
              </div>
              <hr class="colorgraph" />
              <div class="row">
                <div class="col-xs-12 col-md-6"></div>
                <div class="upbtn">
                  <a href="#" class="btn btn-success btn-block btn-lg"
                    >Update</a
                  >
                </div>
              </div>
              <a href="#" style="color:red;  margin-right:82%"
                >Or delete my account!</a
              >
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
  </div>
</template>

<script>
export default {
  name: "editProfile",
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
.container {
  background-color: #d9d9d9;
  margin-top: 5%;
  height: 370px;
  margin-bottom: 5%;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.2), 0 5px 15px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
}
.h2text {
  margin-top: 3%;
}
#leftPanel {
  background-color: #0079ac;
  color: #fff;
  text-align: center;
}
.upbtn {
  width: 30%;
  margin-right: 21%;
}
a {
  font-size: 18px;
}
/* Credit to bootsnipp.com for the css for the color graph */
.colorgraph {
  height: 5px;
  border-top: 0;
  background: #c4e17f;
  border-radius: 5px;
  background-image: -webkit-linear-gradient(
    left,
    #c4e17f,
    #c4e17f 12.5%,
    #f7fdca 12.5%,
    #f7fdca 25%,
    #fecf71 25%,
    #fecf71 37.5%,
    #f0776c 37.5%,
    #f0776c 50%,
    #db9dbe 50%,
    #db9dbe 62.5%,
    #c49cde 62.5%,
    #c49cde 75%,
    #669ae1 75%,
    #669ae1 87.5%,
    #62c2e4 87.5%,
    #62c2e4
  );
  background-image: -moz-linear-gradient(
    left,
    #c4e17f,
    #c4e17f 12.5%,
    #f7fdca 12.5%,
    #f7fdca 25%,
    #fecf71 25%,
    #fecf71 37.5%,
    #f0776c 37.5%,
    #f0776c 50%,
    #db9dbe 50%,
    #db9dbe 62.5%,
    #c49cde 62.5%,
    #c49cde 75%,
    #669ae1 75%,
    #669ae1 87.5%,
    #62c2e4 87.5%,
    #62c2e4
  );
  background-image: -o-linear-gradient(
    left,
    #c4e17f,
    #c4e17f 12.5%,
    #f7fdca 12.5%,
    #f7fdca 25%,
    #fecf71 25%,
    #fecf71 37.5%,
    #f0776c 37.5%,
    #f0776c 50%,
    #db9dbe 50%,
    #db9dbe 62.5%,
    #c49cde 62.5%,
    #c49cde 75%,
    #669ae1 75%,
    #669ae1 87.5%,
    #62c2e4 87.5%,
    #62c2e4
  );
  background-image: linear-gradient(
    to right,
    #c4e17f,
    #c4e17f 12.5%,
    #f7fdca 12.5%,
    #f7fdca 25%,
    #fecf71 25%,
    #fecf71 37.5%,
    #f0776c 37.5%,
    #f0776c 50%,
    #db9dbe 50%,
    #db9dbe 62.5%,
    #c49cde 62.5%,
    #c49cde 75%,
    #669ae1 75%,
    #669ae1 87.5%,
    #62c2e4 87.5%,
    #62c2e4
  );
}
</style>
