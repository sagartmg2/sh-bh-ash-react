import { useState, useEffect } from "react"

function GoogleTabs() {

    const [currentTab, setCurrentTab] = useState("all")
    let tabs = ["all", "images", "videos"]

    return <>
        currentTab: {currentTab}
        <hr className="my-4" />
        <ul className="flex gap-5">
            {
                tabs.map(el => {
                    return <li
                        className={` ${currentTab === el ? "text-blue-500 border-b-blue-500" : ""}  cursor-pointer border px-2 py-1 `}
                        onClick={() => {
                            setCurrentTab(el)
                        }}
                    >
                        {el}
                    </li>
                })
            }
        </ul>

        <div className={`${currentTab === "all" ? "block" : "hidden"}`}>all contents</div>
        <div className={`${currentTab === "images" ? "block" : "hidden"}`}>images contents</div>
        <div className={`${currentTab === "videos" ? "block" : "hidden"}`}>video contents</div>
        <hr />

        {/* {
            currentTab === "all"
            &&
            <p>all contents</p>
        }
        {
            currentTab === "images"
            &&
            <p>IMAGES contents</p>
        }
        {
            currentTab === "videos"
            &&
            <p>videos contents</p>
        } */}

    </>
}
export default GoogleTabs