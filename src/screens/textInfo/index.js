//Tạo ra một chức năng hiện thông tin  dùng chung được ở nhiều chỗ để đồng bộ về giao diện
// => Tạo ra 1 phần text style giống nhau nhưng nội dung có thể thay đổi

import {Text, StyleSheet} from 'react-native';


// export default function TextInfo ({name}) {
export default function TextInfo (props) {

    const name = props.name //Sau props la ten thuoc tinh
    const decs = props.decs

    return (
        <>
            <Text style={style.colorText}>{name}</Text>
        {
            decs 
            ? <Text style = {style.colorText}>Desc: {decs}</Text>
            :null
        }
        </>
        
    )
}

const style = StyleSheet.create({
    colorText: {
        color: "#0000FF",
        fontWeight: "bold",
        fontSize: 20,
      },
});