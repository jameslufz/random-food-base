import Link from 'next/link'
import { useState } from 'react';
import { Button,Nav,Navbar,Image, Card }   from 'react-bootstrap'
import { RiRefreshLine } from "react-icons/ri";

export default function Index() {

    const   [result,setResult]  =   useState(null)
    const   [images,setImages]  =   useState(null)
    const   [done,setDone]      =   useState(false)
    const   foodName    =   new Array(
        "ชาเย็น",
        "ชาเขียว",
        "โกโก้",
        "ชาโก้",
        "โอดิบ",
        "ชามะนาว",
        "ชาดำ",
        "โอเลี้ยง",
        "ลาเต้",
        "อเมริกาโน่",
        "กาแฟดำ",
        "คาปูชิโน่",
        "มอคค่า",
        "น้ำอัดลม",
        "บ๊วย",
        "แดงโซดา",
        "นมเย็น",
        "ชามะลิ",
        "น้ำผลไม้ปั่น",
        "น้ำเปล่า",
        "น้ำท่อม")
    const   imgName     =   new Array(
        "drink/ชาเย็น.jpg",
        "drink/ชาเขียว.jpg",
        "drink/โกโก้.jpg",
        "drink/ชาโก้.jpg",
        "drink/โอดิบ.jpg",
        "drink/ชามะนาว.jpg",
        "drink/ชาดำ.jpg",
        "drink/โอเลี้ยง.jpg",
        "drink/ลาเต้.jpg",
        "drink/อเมริกาโน่.jpg",
        "drink/กาแฟดำ.jpg",
        "drink/คาปูชิโน่.jpg",
        "drink/มอคค่า.jpg",
        "drink/น้ำอัดลม.jpg",
        "drink/บ๊วย.jpg",
        "drink/แดงโซดา.jpg",
        "drink/นมเย็น.jpg",
        "drink/ชามะลิ.jpg",
        "drink/น้ำผลไม้ปั่น.jpg",
        "drink/น้ำเปล่า.jpg",
        "drink/น้ำท่อม.jpg")

    const   startRand   =   ()  =>  {
        let random  =   Math.floor(Math.random() * foodName.length)
        let timer   =   setInterval(() => {
            let random  =   Math.floor(Math.random() * foodName.length)
            setResult(foodName[random])
            setImages(imgName[random])
        }, 50)
        setTimeout(() => {
            clearInterval(timer)
            setResult('🔥' +foodName[random]+ '🔥')
            setImages(imgName[random])
            setDone(true)
        }, 3000);
    }

    return <>
        <style global jsx>{`

            html,
            body,
            .contain-fluid-full {width:100%;height:100%;}

            .container-fluid-full {position:relative;}
            .set-to-middle {position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);}

            body {background-image:url(main/drink.jpg);}
            .card {background-color:#ffffffd0;}
        `}</style>
        <Navbar bg="dark" variant="dark">
            <Link href="/" passHref><Navbar.Brand >ระบบสุ่มอาหาร</Navbar.Brand></Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                หมดปัญหาคิดเมนูไม่ออก
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>

        <div className="d-flex justify-content-center">
            <div className="set-to-middle">
                <Card>
                    <Card.Body>
                        { images    ?   <Image src={images} style={{ objectFit : 'cover'}} width={150} height={150} /> :   ''}
                        { result    ?   <p className="text-center my-2">{result}</p> : <Button onClick={startRand} variant="primary" size="lg"><RiRefreshLine />สุ่มอาหาร</Button> }
                        { done      ?   <Button variant="success"
                                                className="d-block mx-auto"
                                                size="lg"
                                                onClick={() => {setResult(null)
                                                                setImages(null)
                                                                setDone(!done)
                                                                startRand()}
                                                    }>สุ่มใหม่ดีกว่า</Button> : ''}
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>
}