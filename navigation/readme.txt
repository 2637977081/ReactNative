安装react-navigation 插件命令
    cd 工程目录
    react-native run-android //先运行判断工程是否有其它错误
    yarn/npm add react-navigation   //添加插件 
    react-native run-android //


跳转传参
    this.props.navigation.navigate(url跳转链接,json传递参数)

    onPress={()=>{
        this.props.navigation.navigate("TabShow",{inf:'跳转成功',title:'标题',});
    }}

目标页面
    this.props.navigation.state.params //传递过来的参数

    this.state = {
        item: this.props.navigation.state.params,
    }//界面中使用this.state.item.xx 调用

跳转页面设置标题
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.bookTitle,
    })