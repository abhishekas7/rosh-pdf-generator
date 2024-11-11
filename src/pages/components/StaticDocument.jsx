import React from 'react';
import { Document, Page, Text, Image, StyleSheet, View, Font } from '@react-pdf/renderer';


Font.register({
    family: 'Inter',
    fonts: [
        { src: '/fonts/Inter-Regular.ttf', fontWeight: 400 },
        { src: '/fonts/Inter-Medium.ttf', fontWeight: 500 },
        { src: '/fonts/Inter-SemiBold.ttf', fontWeight: 600 },
        { src: '/fonts/Inter-Bold.ttf', fontWeight: 700 },
    ]
});

Font.register({
    family: 'Archivo',
    fonts: [
        { src: '/fonts/Archivo-Regular.ttf', fontWeight: 400 },
        { src: '/fonts/Archivo-Medium.ttf', fontWeight: 500 },
        { src: '/fonts/Archivo-SemiBold.ttf', fontWeight: 600 },
        { src: '/fonts/Archivo-Bold.ttf', fontWeight: 700 },
    ]
});



const styles = StyleSheet.create({
    coverTitle: {
        fontSize: 55,
        fontStyle: 'Archivo',
        fontStyle: 'normal',
        marginTop: 96.87,
        color:'#38465A',
        lineHeight: 1.45,
        fontWeight:400,
    },
    coverDes: {
        marginTop: 30,
        fontSize:16,
        lineHeight: 1.45,
        fontStyle: 'Archivo',
        color: "#38465A",
        fontWeight: 600
    },
    coverView: {
        marginLeft: 55,
        marginRight: 55,
        marginTop: 52,
        marginBottom: 52
    },
    pageCreated: {
        backgroundColor: 'rgba(223, 223, 223, 0.60)',
        display: 'flex',
        justifyContent: 'space-between',
        height: 'auto',
        paddingLeft: 14,
        paddingTop: 20.5,
        paddingBottom: 20.5,
        paddingRight: 14,
        borderRadius: 10,
        fontWeight: 700,
        fontFamily: 'Inter',
        fontSize:12,
        color: '#38465A',
        flexDirection:'row',
        marginTop:80,
    },
    roshlogo: {
        width: 150,
        height: 'auto',
    },
    pages: {
        fontFamily: 'Inter',
        textAlign: 'left',
        backgroundColor: "#FFF",
    },
    header: {
        display: 'flex',
        fontFamily: 'Inter',
        fontWeight: 700,
        flexDirection: 'row',
        fontSize: 10,
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: 'bold',
        paddingLeft: 25,
        paddingRight: 25,
        color: '#38465A',
        backgroundColor: '#CEDDDD',
        justifyContent: 'space-between',
        height: 'auto',
        marginBottom: 7,
    },
    footer: {
        color: '#38465A',
        backgroundColor: '#CEDDDD',
        content: '',
        height: 8,
        width: 302,
        position: 'absolute',
        bottom: 0,
        left: '50%',
        right:'50%',
        transform: 'translateX(-150%)',
    }
    ,
    headerText: {
        color: '#38465A',
    },
    title: {
        fontFamily: 'Inter',
        fontWeight: 600,
        color: '#38465A',
        fontSize: 14,
        lineHeight: 1.45,
    },
    regularText: {
        color: '#38465A',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: 10,
        lineHeight: 1.45,
        fontWeight: 500,
        marginTop: 10,
    },
    image: {
        marginTop: 20,
        textAlign: 'center',
        marginLeft: 28,
        marginRight: 28,
        paddingLeft: 70,
        paddingRight: 70,
    },
    source: {
        fontFamily: 'Inter',
        fontSize: 7,
        fontWeight: 400,
        fontStyle: 'normal',
        color: '#5F6C7D',
        paddingLeft: 8,
        paddingTop: 2,
        paddingBottom: 5,
        paddingRight: 8,
        backgroundColor: '#F5F5F5',
        borderRadius: 3,
        maxWidth: '337px',
        marginTop: 6,
    },
    ImageContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContent: {
        marginLeft: 28,
        marginRight: 28,
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 17,

    }
});

const StaticDocument = ({ data = {},author="Ashmil Hussainn",dateOfCreated = "21-10-2024", pageHeader = "Lorem ipsum dolor sit amet", coverPageTitle = "", coverPageDescription = "" }) => (
    <Document>
        <Page size={{ width: 595, height: 842 }} style={styles.coverpage}>
            <View style={styles.coverView}>
                <Image src={'/images/Roshn_Logo 1.png'} style={styles.roshlogo} />
                <Text style={styles.coverTitle}>
                    {coverPageTitle}
                </Text>
                <Text style={styles.coverDes}>
                    {coverPageDescription}
                </Text>
                <View style={styles.pageCreated}>
                    <Text>{author}</Text>
                    <Text>{dateOfCreated}</Text>
                </View>
            </View>

        </Page>
        <Page size={{ width: 595, height: 842 }} style={styles.pages} wrap>
            <View style={styles.header} fixed>
                <Text style={styles.headerText}>{pageHeader}</Text>
                <Text style={styles.headerText} render={({ pageNumber, totalPages }) => (
                    `${pageNumber - 1}`
                )} />
            </View>

            {/* Content */}
            {data.map((item, i) => (
                <View key={i}>
                    <View style={styles.textContent}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.regularText}>{item.content}</Text>
                    </View>

                    <Image src={item.image} style={styles.image} />
                    <View style={styles.ImageContent}>
                        <Text style={styles.source}>{item.source}</Text>
                    </View>
                </View>
            ))}
             <View style={styles.footer} fixed>
             dsd
            </View>
        </Page>
    </Document>
);

export default StaticDocument;
