//import liraries
import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Alert } from 'react-native';
import { WebView } from 'react-native-webview'


const source = {
    html: `
    <!DOCTYPE html>
        <html>
            <head>
                <style>
                .button {
                    border: none;
                    color: white;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 30px;
                    margin: 4px 2px;
                    transition-duration: 0.4s;
                    cursor: pointer;
                    width: 200px;
                    height: 80px
                }
                .button1 {
                    background-color: #01B99F;
                    color: white;
                    border: 2px solid #01B99F;
                    border-radius: 100px
                }
                .myDiv {
                    text-align: center;
                    display: flex;
                    align-items: center;
                    min-height: 100vh;
                    justify-content: center;
                }
                </style>
            </head>
            <body>
                <div class="myDiv">
                    <button onclick="myFunction()" class="button button1">Try it</button>
                </div>
                <script>
                    function myFunction() {
                        window.ReactNativeWebView.postMessage("Triggered from webview to native"); 
                    }
                    window.addEventListener("message", (msg) => {
                        alert(msg.data)
                    })
                </script>
            </body>
        </html>
    `
};

// create a component
const HomeScreen = () => {

    const webViewRef = useRef(null)

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerView}>
                <Image
                    style={{ height: 15, width: 15, tintColor: 'rgba(49, 59, 73, 1)', resizeMode: "contain" }}
                    source={require('../assets/back.png')} />
                <Text style={{ width: 50, height: 18, fontSize: 18, color: "#1D232B", fontWeight: 700 }}>자유톡</Text>
                <Image
                    style={{ height: 20, width: 20, tintColor: 'rgba(175, 185, 202, 1)', resizeMode: "contain" }}

                    source={require('../assets/Vector.png')} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ margin: 15 }}>

                    <View style={styles.secondView}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../assets/profilepic.png')} style={{ backgroundColor: "#FFC768", borderRadius: 50, height: 45, width: 45 }} />
                            </View>

                            <View >
                                <View style={{ flexDirection: 'row', marginTop: 2 }}>
                                    <Text style={{ color: '#1D232B', fontSize: 14, marginLeft: 10, fontWeight: 700 }}>안녕 나 응애 </Text>
                                    <View style={{ width: 14, height: 14, backgroundColor: "#01B99F", borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('../assets/check_small.png')} style={{ width: 8, height: 7 }} resizeMode='cover' />
                                    </View>
                                    <Text style={{ color: '#919EB6', fontSize: 10, marginLeft: 5, fontWeight: 500 }}>1일전</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 2 }}>
                                    <Text style={{ color: '#919EB6', fontSize: 12, fontWeight: 400 }}>165cm</Text>
                                    <Text style={{ color: '#919EB6', fontWeight: 400 }}> . </Text>
                                    <Text style={{ color: '#919EB6', fontSize: 12, fontWeight: 400 }}>53kg</Text>
                                </View>

                            </View>
                        </View>
                        <View>
                            <View style={{ backgroundColor: "#01B99F", width: 58, height: 24, borderRadius: 30, alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: 500 }}>팔로우</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ width: 303, height: 14, marginTop: 24 }}>
                        <Text style={{ fontWeight: 700, fontSize: 14, color: '#1D232B' }}>지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?</Text>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text style={{ marginBottom: 20, fontSize: 12, fontWeight: 500, color: '#313B49' }}>
                            지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시 어떤 상품이 제일 괜찮았어?
                        </Text>
                        <Text style={{ marginBottom: 20, fontSize: 12, fontWeight: 500, color: '#313B49' }}>
                            후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일 재밌었다던데 맞아???
                        </Text>
                        <Text style={{ fontSize: 12, fontWeight: 500, color: '#313B49' }}>
                            올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
                        </Text>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: 60, height: 22, backgroundColor: "#F7F8FA", borderRadius: 50, borderColor: '#CED3DE', borderWidth: 0.5, alignItems: "center", justifyContent: 'center', }}>
                            <Text style={{ color: '#5A6B87', fontSize: 12, fontWeight: 500 }}>#2023</Text>
                        </View>
                        <View style={{ width: 130, height: 22, backgroundColor: "#F7F8FA", borderRadius: 50, borderColor: '#CED3DE', borderWidth: 0.5, alignItems: "center", justifyContent: 'center', }}>
                            <Text style={{ color: '#5A6B87', fontSize: 12, fontWeight: 500 }}>#TODAYISMONDAY</Text>
                        </View>
                        <View style={{ width: 55, height: 22, backgroundColor: "#F7F8FA", borderRadius: 50, borderColor: '#CED3DE', borderWidth: 0.5, alignItems: "center", justifyContent: 'center', }}>
                            <Text style={{ color: '#5A6B87', fontSize: 12, fontWeight: 500 }}>#TOP</Text>
                        </View>
                        <View style={{ width: 66, height: 22, backgroundColor: "#F7F8FA", borderRadius: 50, borderColor: '#CED3DE', borderWidth: 0.5, alignItems: "center", justifyContent: 'center', }}>
                            <Text style={{ color: '#5A6B87', fontSize: 12, fontWeight: 500 }}>##POPS!</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ width: 60, height: 22, backgroundColor: "#F7F8FA", borderRadius: 50, borderColor: '#CED3DE', borderWidth: 0.5, alignItems: "center", justifyContent: 'center', }}>
                            <Text style={{ color: '#5A6B87', fontSize: 12, fontWeight: 500 }}>#WOW</Text>
                        </View>
                        <View style={{ marginLeft: 16, width: 60, height: 22, backgroundColor: "#F7F8FA", borderRadius: 50, borderColor: '#CED3DE', borderWidth: 0.5, alignItems: "center", justifyContent: 'center', }}>
                            <Text style={{ color: '#5A6B87', fontSize: 12, fontWeight: 500 }}>#ROW</Text>
                        </View>
                    </View>

                </View>

                <View style={{ height: 450, width: Dimensions.get('screen').width, backgroundColor: "#EDEEF3", }}>
                    <View style={{ position: "absolute", alignSelf: "center", top: 0, bottom: 0, left: 0, right: 0 }}>
                        <WebView
                            ref={webViewRef}
                            style={{ backgroundColor: "transparent", }}
                            source={source}
                            onMessage={({ nativeEvent }) => {
                                Alert.alert(nativeEvent.data)
                            }}
                        />
                    </View>
                </View>


                <View style={{ height: 56, justifyContent: 'space-between', flexDirection: 'row', alignItems: "center", margin: 10, borderBottomWidth: 0.2, borderBottomColor: '#ccc' }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require('../assets/heart.png')} style={{ height: 20, width: 17, tintColor: 'rgba(175, 185, 202, 1)', resizeMode: "contain" }} />
                        <Text style={{ fontSize: 12, fontWeight: 400, color: '#919EB6', marginLeft: 9, marginRight: 19 }}>5</Text>
                        <Image source={require('../assets/talk.png')} style={{ height: 18, width: 18, tintColor: 'rgba(175, 185, 202, 1)', resizeMode: "contain" }} />
                        <Text style={{ fontSize: 12, fontWeight: 400, color: '#919EB6', marginLeft: 9, marginRight: 19 }}>5</Text>
                        <Image source={require('../assets/share.png')} style={{ height: 20, width: 17, tintColor: 'rgba(175, 185, 202, 1)', resizeMode: "contain", marginRight: 25 }} />
                        <Image source={require('../assets/dot.png')} style={{ height: 10, width: 10, tintColor: 'rgba(175, 185, 202, 1)', resizeMode: "contain" }} />
                    </View>
                    <TouchableOpacity
                        style={{ width: 100, height: 40, backgroundColor: "#01B99F", borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            webViewRef.current.postMessage("Triggered from native to webview")
                        }}>
                        <Text style={{ fontWeight: 500, fontSize: 12, color: 'white' }}>WV Alert</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{ margin: 15 }}>
                        <View style={styles.secondView}>
                            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                <View>
                                    <Image source={require('../assets/profilepic.png')} style={{ backgroundColor: "#FFC768", borderRadius: 45, height: 45, width: 45 }} />
                                </View>

                                <View >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ color: '#1D232B', fontSize: 14, marginLeft: 10, fontWeight: 700 }}>안녕 나 응애 </Text>
                                        <View style={{ width: 14, height: 14, backgroundColor: "#01B99F", borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={require('../assets/check_small.png')} style={{ width: 7, height: 6 }} resizeMode='cover' />
                                        </View>
                                        <Text style={{ color: '#919EB6', fontSize: 10, marginLeft: 5, fontWeight: 500 }}>1일전</Text>
                                    </View>

                                </View>
                            </View>
                            <View>
                                <Image source={require('../assets/dot.png')} style={{ height: 10, width: 10, tintColor: 'rgba(175, 185, 202, 1)', resizeMode: "contain" }} />
                            </View>

                        </View>
                        <View style={{ marginTop: 5, marginLeft: 60 }}>
                            <Text style={{ fontWeight: 400, fontSize: 12, color: '#313B49' }}>어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
                                우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
                                아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
                                괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
                                꼭 봐주세용~!</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                <Image source={require('../assets/heart.png')} style={{ height: 13, width: 15, tintColor: 'rgba(175, 185, 202, 1)', resizeMode: "contain" }} />
                                <Text style={{ fontSize: 12, fontWeight: 400, color: '#919EB6', marginLeft: 9, marginRight: 19 }}>5</Text>
                                <Image source={require('../assets/talk.png')} style={{ height: 14, width: 14, tintColor: 'rgba(175, 185, 202, 1)', resizeMode: "contain" }} />
                                <Text style={{ fontSize: 12, fontWeight: 400, color: '#919EB6', marginLeft: 9, marginRight: 19 }}>5</Text>

                            </View>
                            <View style={{ ...styles.secondView, marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                    <View>
                                        <Image source={require('../assets/pic.png')} style={{ backgroundColor: "lightpink", borderRadius: 50, height: 45, width: 45 }} />
                                    </View>

                                    <View >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ color: '#1D232B', fontSize: 14, marginLeft: 10, fontWeight: 700 }}>ㅇㅅㅇ</Text>
                                            <Text style={{ color: '#919EB6', fontSize: 10, marginLeft: 5, fontWeight: 500 }}>1일전</Text>
                                        </View>

                                    </View>
                                </View>
                                <View>
                                    <Image source={require('../assets/dot.png')} style={{ height: 10, width: 10, tintColor: 'rgba(175, 185, 202, 1)', resizeMode: "contain" }} />
                                </View>

                            </View>
                            <Text style={{ marginLeft: 60, fontWeight: 400, fontSize: 12, color: '#313B49' }}>오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginLeft: 60 }}>
                                <Image source={require('../assets/heart.png')} style={{ height: 13, width: 15, tintColor: 'rgba(175, 185, 202, 1)', resizeMode: "contain" }} />
                                <Text style={{ fontSize: 12, fontWeight: 400, color: '#919EB6', marginLeft: 9, marginRight: 19 }}>5</Text>


                            </View>
                        </View>



                    </View>
                </View>

                <View style={{ height: 50, justifyContent: 'space-between', flexDirection: "row", margin: 15, alignItems: "center", borderTopColor: '#ccc', borderTopWidth: 0.2 }}>
                    <View style={{ justifyContent: 'center', alignItems: "center", flexDirection: 'row' }}>
                        <Image source={require('../assets/img.png')} style={{ height: 20, width: 20, tintColor: 'rgba(175, 185, 202, 1)', resizeMode: "contain" }} />
                        <Text style={{ marginLeft: 20, color: '#AFB9CA', fontWeight: 400, fontSize: 12 }}>댓글을 남겨주세요.</Text>
                    </View>

                    <Text style={{ color: '#AFB9CA', fontSize: 12, fontWeight: 400 }}>등록</Text>

                </View>


            </ScrollView>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    headerView: {
        height: 48,
        left: 0,
        right: 0,
        top: 0,
        background: "#FFFFFF",
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        width: '90%',

    },
    secondView: {
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: 'center',
    }
});

//make this component available to the app
export default HomeScreen;
