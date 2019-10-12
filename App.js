/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Button,
    View, 
    TouchableOpacity,
    Text,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    AppRegistry,
      ScrollView,
      TextInput,
    Image } from 'react-native';
    import {createAppContainer} from 'react-navigation';
    import {createStackNavigator} from 'react-navigation-stack';


var StudentData = [
    {
        "id": "Đắc Nhân Tâm",
        "name": "How to Win Friends and Influence People",
        "avata":
        "https://reviewsach.net/wp-content/uploads/2018/12/Đắc-Nhân-Tâm-reviewsach.net_.jpg",
        "thongtin" : "một quyển sách nhằm tự giúp bản thân (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới..."
    },
    {
        "id": "KHỞI NGHIỆP",
        "name": "starting a business",
        "avata":
        "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/h/khoinghiep40_bia1.jpg",
        "thongtin" : "Internet và nền kinh tế toàn cầu đang thay đổi căn bản mọi mặt đời sống thường nhật cũng như thế giới công việc. Trước đây, trong một xã hội mà internet chưa có sự phủ sóng sâu rộng, sẽ rất khó để một start-up nhỏ cạnh tranh được với các doanh nghiệp lớn, và đến một giai đoạn nhất định, doanh nghiệp non nớt sẽ bị chững lại. Tuy thế, thị trường giờ đã thay đổi. Nền kinh tế đang chuyển dịch sang một môi trường tự kinh doanh, tự chủ và chúng ta có thể làm việc ở bất kì nơi nào. Với sự trợ giúp của công nghệ hiện đại và mạng internet, một mình bạn có thể thách thức cả thế giới - đó chính là thông điệp chính được truyền tải trong Khởi nghiệp 4.0. "
    },
    {
        "id": "Đừng Bao Giờ Đi Ăn Một Mình (Tái Bản) - Keith Ferrazzi",
        "name": "never eat along",
        "avata":
        "https://salt.tikicdn.com/cache/550x550/ts/product/8e/c5/c3/9f680d49c05be61065c81a6e6fce4faa.jpg",
        "thongtin" : "Đừng Bao Giờ Đi Ăn Một Mình - Và Những Bí Mật Dẫn Đến Thành Công, Thông Qua Xây Dựng Mối Quan Hệ, Bạn mong muốn đi tắt đón đầu,Bạn muốn vững bước đến thành công,Công thức để làm được điều này, theo lời bậc thầy về kết nối là Keith Ferrazzi, chính là phải biết làm quen với mọi người. Ferrazzi đã khám phá từ khi còn trẻ rằng điểm khác biệt của những người thành công rực rỡ chính là cách họ vận dụng quyền năng của những mối quan hệ - để mọi người cùng thắng."
    },
    {
        "id": "Sức Mạnh Của Thói Quen",
        "name": "The Power of Habits",
        "avata":
        "https://vnwriter.net/wp-content/uploads/2017/11/sach-suc-manh-cua-thoi-quen.jpg",
        "thongtin" : "Đây không chỉ là cuốn sách mà Business Insider khuyên đọc mà còn là cuốn sách mà rất nhiều tỉ phú nổi tiếng đã từng đọc từ khi họ còn rất trẻ. Thiết nghĩ thói quen cũng làm nên cuộc đời mỗi người, có những điều đơn giản diễn ra hằng ngày xung quanh bản thân mà ta không để ý đến. Tất cả những điều đó đều có thể ảnh hưởng trực tiếp đến cuộc sống mỗi người. Chính vì vậy, cuốn sách này cho ta nhìn nhận lại bản thân, những thói quen mà ta cần thay đổi để trở nên tốt hơn, ít ra là chiến thắng chính bản thân mình."
    },
    {
        "id": "Thế Giới Phẳng",
        "name": "The wolrd is flat",
        "avata":
        "https://vnwriter.net/wp-content/uploads/2017/10/sach-the-gioi-phang.jpg",
        "thongtin" : "Quyển sách nói về biên giới phi truyền thống, thế giới dường như không khoảng cách nhưng thực ra lại rất khoảng cách, đan xen về lợi ích giữa các quốc gia. Trong cái thế giới “phẳng” mà không phẳng đó, ai chớp được cơ hội sẽ thành công."
    },
    {
        "id": "người giàu nhất thành baby",
        "name": "the richest person in babylon",
        "avata":
        "https://rodbooks.com/FileUploads/imgfile/nguoi-giau-co-nhat-thanh-babylon.png",
        "thongtin" : "Người giàu có nhất thành Babylon là một cuốn sách hấp dẫn, giới thiệu về cách tiết kiệm, buôn bán và làm giàu của người dân cổ xưa thành Babylon. Những phương cách làm giàu này vẫn còn giá trị hữu ích đối với giới kinh doanh, buôn bán ngày nay. Hôm nay Rodbooks xin review cho bạn cuốn sách Người Giàu Có Nhất Thành Babylon, chắc chắn bạn sẽ phải thích thú và thu nhận được rất nhiều điều từ cuốn sách này."
    },
    {
        "id": "Bí Mật Tư Duy Triệu Phú",
        "name": "Millionaire Thinking Secrets",
        "avata":
        "https://3.bp.blogspot.com/-LNtRsHzuNeM/WrN4UcWHIJI/AAAAAAAABac/rrUR5pIKMqM5gtFeBU1isiWLFisl9mEnQCLcBGAs/s400/review-sach-bi-mat-tu-duy-trieu-phu%2528FILEminimizer%2529.jpg",
        "thongtin" : "Đã bao giờ ban cảm thấy tâm đắc với một cuốn sách hay, bạn đọc đi đọc lại nhiều lần rồi nhưng vẫn muốn nghiền ngẫm nó. Nếu chưa có, thì cuốn sách Bí mật tư duy triệu phú của T. Harv Eke, chắc chắn là một cuốn sách như thế, sẽ làm bạn gật gù khen hay."
    },
    {
        "id": "Nhà Giả Kim",
        "name": "Alchemist",
        "avata":
        "http://sachvanhoc.vn/wp-content/uploads/2018/03/review-nha-gia-kim.jpg",
        "thongtin" : "Đến lúc này thì văn phong đáng yêu của Paulo Coelho khiến mình thực sự bị thu hút, kiểu như đang đọc truyện cổ Andersen ý   Liệu cuối cùng cậu ấy sẽ tìm thấy kho báu ở đâu? Liệu chuyện tình với Fatima có đẹp như một giấc mơ? Tất cả những trải nghiệm trong hành trình theo đuổi kho báu, theo đuổi ước mơ, theo đuổi vận mệnh của Santiago đã giúp anh chàng tìm thấy hạnh phúc. Kho báu không phải là đích đến, kho báu là cả cuộc hành trình ."
    },
    {
        "id": "Trên Đường Băng",
        "name": "on the Ice Road",
        "avata":
        "https://trenduongbang.com/wp-content/uploads/2017/06/Tony-Buoi-Sang-Tren-duong-Bang-840x500.jpg",
        "thongtin" : "Trên đường băng và Cà phê cùng Tony là một trong hai tác phẩm của tác giả ẩn danh với tên Tony Buổi Sáng (TnBS), được xem là những bài học giá trị, sâu sắc và là kim chỉ nam dành cho thế hệ trẻ Việt. Bằng lối viết hài hước, dí dỏm với những phân tích và dẫn chứng “nghe có vẻ” sắc bén, kèm theo là các chia sẻ “chân tình“, tác giả giúp người đọc rất dễ tiếp cận với nội dung của hai cuốn sách này."
    },
    {
        "id": "Buông Bỏ Buồn Buông",
        "name": "Let go of sadness",
        "avata":
        "https://rodbooks.com/FileUploads/imgfile/buong-bo-buon-buong-hinh-anh-1.jpg",
        "thongtin" : "Khi đọc Buông Bỏ Buồn Buông mà Rodbooks giới thiệu, bạn sẽ thấy thế giới vận động và phát triển không ngừng, năng suất lao động của con người cao hơn, cuộc sống nhiều tiện nghi hơn. Vậy mà, cuộc sống hiện đại như dòng thác cuồn cuộn chảy đã buộc con người phải cuốn theo với biết bao áp lực, đè nặng về cả thể xác lẫn tinh thần."
    },
    {
        "id": "Chinh Phục Mục Tiêu",
        "name": "Conquer Target",
        "avata":
        "https://rodbooks.com/FileUploads/imgfile/dam-dan-dau-ban-linh-cua-ke-tien-phong-hinh-anh-rodbooks-9(2).png",
        "thongtin" : "Chinh Phục Mục Tiêu mang đến cho bạn 21 ý tưởng và chiến lược quan trọng để giúp bạn hiện thực hóa mọi điều mong ước. Hàng trăm ngàn người, thậm chí là hàng triệu người, khởi nghiệp với hai bàn tay trắng và đạt được thành công vang dội nhờ những nguyên tắc này. Những gì người khác làm được thì bạn cũng có thể làm được, miễn là bạn thực sự bắt tay thực hiện! . "
    },
    {
        "id": "Khác Biệt Hay Là Chết",
        "name": "Differences or die",
        "avata":
        "https://rodbooks.com/FileUploads/imgfile/dam-dan-dau-ban-linh-cua-ke-tien-phong-hinh-anh-rodbooks-3(2).png",
        "thongtin" : "Khác Biệt Hay Là Chết là một cuốn sách hay được giới kinh doanh đánh giá đi cùng lối trình bày logic, dễ hiểu giúp chúng ta dễ dáng ứng dụng vào cuộc sống. Điều tất yếu chúng ta dễ hiểu rằng, nêu không tạo nên sự khác biệt, không biết cách làm mới bản thân thì đồng nghĩa với chúng ta sẽ thất bại, sẽ “chết”. Bạn không cần phải tìm đâu xa vì chính tác giả Jack Trout đã đưa ra minh chứng đó là các hãng danh tiếng như Nokia, Motorola, Alta Vista,..họ đã từng rất thành công."
    },
    
];
module.export = StudentData;
class Login extends React.Component {

    render() {
        return (

            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 20,   marginVertical: 15, fontWeight:'bold',textAlign: 'center', color:'#ff0000'}}>
                    Welcome to app review books
                </Text>
                <TextInput placeholder='Email'  id='Email' keyboardType="email-address" style={{backgroundColor:'rgb(179, 255, 204)',
    borderRadius: 25,fontWeight:'bold'}}/>
                <TextInput placeholder='Password'  id='Password'  secureTextEntry={true} style={{backgroundColor:'rgb(179, 255, 204)',
    borderRadius: 25, marginTop:10,fontWeight:'bold'}}/>

                <View style={{margin:7,}} />
                <Button 
                       onPress={()=>
          this.props.navigation.navigate('List')
          }
        
                        title="Login"
                    />
  

                </ScrollView>

            )
    }
}
class FlatListStudent extends React.Component {
    static navigationOptions =
    {
        header: null
    };
    render(){
        return(
           <View style={{flex:1, marginTop:3,marginLeft: 8,
        marginRight: 3,}}>
 <FlatList
 data={StudentData}
 renderItem={({item, index})=>{
 return(
  <TouchableHighlight onPress={() =>{this.props.navigation.navigate('Details',{ ten: item.name, anh: item.avata,id:item.id,thongtin:item.thongtin } ) }}>

  <View style={{flex:1, flexDirection:'row', backgroundColor: index % 2 == 0 ? '#FFFFCC': 'white', height: 90,
            padding: 5,}}>
      <Image 
      source={{uri: item.avata}}
      style={{width: 70, height:70,margin:5}}
      />
    <View style={{flex:1 }}>
      <Text style={{fontSize: 18,
        fontWeight: 'bold',
        color: 'red'}}> {item.id} </Text>
      <Text style={{color:'black', fontSize:17}}> {item.name}  </Text>
     </View>
  </View>

  </TouchableHighlight>
 );
 }}
 />
 </View>
         

        );
    }
}



class DetailsScreen extends React.Component {
  render() {

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center'}} >
      <View>
        <Text  style={{fontSize:20,fontWeight:'bold',margin:10, alignItems: 'center', justifyContent: 'center',color:'black'}}>Thông Tin</Text>
        </View>
        
              <View>
                    <Image
                        style={{ width: 250, height: 250}}
                        source={{ uri: this.props.navigation.state.params.anh }}
                    />
                
                  
                    </View>
                    <Text   style={{ fontSize: 20, color: '#000', marginTop: 10,fontWeight:'bold',color:'#ff0000' }}>  {this.props.navigation.state.params.id}</Text>
                   <Text
                        style={{ fontSize: 20, color: '#000' }}
                    >
                        {this.props.navigation.state.params.ten}
                    </Text>
                    <Text style={{ fontSize: 14, color: '#000'}}>Mô Tả : {this.props.navigation.state.params.thongtin}</Text>

        <Button
          title="Back"
          onPress={() => this.props.navigation.goBack()
          }
        />
      </View>

    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: {
      screen: Login,
    },
    Details: {
      screen: DetailsScreen,
    },
    List:{
      screen:FlatListStudent,
    },
  },
  {

    headerMode:'none',  }
);
export default createAppContainer(RootStack);

