import Link from 'next/link'
import { useState } from 'react';
import { Button,Nav,Navbar,Image, Card }   from 'react-bootstrap'
import { RiRefreshLine } from "react-icons/ri";

export default function Index() {

    const   [result,setResult]  =   useState(null)
    const   [images,setImages]  =   useState(null)
    const   [done,setDone]      =   useState(false)
    const   foodName    =   new Array("ผัดซีอิ๊ว","ข้าวผัดปู","ข้าวผัดทะเล","ข้าวผัดต้มยำ","เครื่องแกงหมู","ราดหน้า","ไข่เจียว","มาม่าผัด","คะน้าหมูกรอบ","กระเพราหมูสับ")
    const   imgName     =   new Array("food/ผัดซีอิ๊ว.jpg","food/ข้าวผัดปู.jpg","food/ข้าวผัดทะเล.jpg","food/ข้าวผัดต้มยำ.jpg","food/เครื่องแกงหมู.jpg","food/ราดหน้า.jpg","food/ไข่เจียว.jpg","food/มาม่าผัด.jpg","food/คะน้าหมูกรอบ.jpg","food/กระเพราหมูสับ.jpg")

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

            body {background-image:url(main/background.jpg);}
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