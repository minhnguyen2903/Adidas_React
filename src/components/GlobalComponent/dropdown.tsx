const DropDown = (props: any) => {
    const list = {
        men: [
            {
                name: "featured",
                items: ["new arrivals", "this week's top sellers", " ", "ultraboost 21 - new colourways", "stan smith", "4D", "ZX", "a-ZX series"],
                all: "all men's"
            },
            {
                name: "shoes",
                items: ["originals", "football", "running", "sprots inspired", "outdoor", "basketball", "slides", "tennis"],
                all: "all men's shoes"
            },
            {
                name: "clothing",
                items: ["t-shirts & polos", "jerseys", "Hoodies & Jackets", "Sweatshirts & tracksuits", "pants", "tights", "shorts", "compression layers"],
                all: "all men's clothing"
            },
            {
                name: "accessories",
                items: ["all bags", "backpacks", "training bags", "socks", "caps & headwear", "gloves", "balls", "shinguards & straps", "face covers"],
                all: "all men's accessories"
            },
            {
                name: "sale",
                items: ["shoes", "clothing", "accessories"],
                all: "all men's sale"
            },
            {
                name: "sports",
                items: ["football", "running", "training", "basketball", "swimming", "golf", "tennis"],
                all: "all men's sports"
            }
        ],
        women: [
            {
                name: "featured",
                items: ["new arrivals", "this week's top sellers"," ", "ultraboost 21 - new colourways", "stan smith", "4d", "ZX", "a-ZX series"],
                all: "all women's"
            },
            {
                name: "shoes",
                items: ["originals", "football", "running", "sprots inspired", "outdoor", "basketball", "slides", "tennis"],
                all: "all women's shoes"
            },
            {
                name: "clothing",
                items: ["t-shirts & polos", "jerseys", "Hoodies & Jackets", "Sweatshirts & tracksuits", "pants", "tights", "shorts", "compression layers"],
                all: "all women's clothing"
            },
            {
                name: "accessories",
                items: ["all bags", "backpacks", "training bags", "socks", "caps & headwear", "gloves", "balls", "shinguards & straps", "face covers"],
                all: "all women's accessories"
            },
            {
                name: "sale",
                items: ["shoes", "clothing", "accessories"],
                all: "all women's sale"
            },
            {
                name: "sports",
                items: ["football", "running", "training", "basketball", "swimming", "golf", "tennis"],
                all: "all women's sports"
            }
        ],
        kids: [
            {
                name: "featured",
                items: ["new arrivals", "this week's top sellers", "prtformance", "originals", "lego", "football jerseys"],
                all: "all kids"
            },
            {
                name: "youth (8-16)",
                items: ["boys clothing", "girls clohing", " ", "boys shoes", "girls shoes"],
                all: "all youth"
            },
            {
                name: "kids (4-8)",
                items: ["boys clothing", "girls clothing", " ", "boys shoes", "girls shoes"],
                all: "all kids"
            },
            {
                name: "baby & toddlers (1-4)",
                items: ["clothing", "shoes"],
                all: "all babies"
            },
            {
                name: "sale",
                items: ["shoes", "clothing", "accessories"],
                all: "all kids sale"
            },
            {
                name: "sports",
                items: ["training", "football", "running", "golf"],
                all: "all sports"
            }
        ]
    }

    const renderDropdown = (obj: any, category: any) => {
        const renderList = obj.map((item: any) => {
            const index = obj.indexOf(item);
            if(index === 0) {
                return (
                    <div key={index} className="col-3 nav-first-row ps-4 pt-5 pb-3">
                        <div className="text-600 text-uppercase letter-spacing pb-3 text-small">{item.name}</div>
                        <ul className="dropdown-list">
                            {item.items.map((element: any) => {
                                const elementIndex = item.items.indexOf(element);
                                return (
                                    <li key={elementIndex} className="text-capitalize mb-2 text-small" style={{lineHeight: "16px"}} onClick = {() => {window.location.href=`/search?q=${category} ${element}}`}}>{element}</li>
                                )
                            })}
                        </ul>
                    </div>
                    )
            } else {
                return (
                    <div key={index} className="ps-4 pt-5 pb-3 col">
                        <div className="text-600 text-uppercase letter-spacing pb-3 text-small">{item.name}</div>
                        <ul className="dropdown-list">
                            {item.items.map((element: any) => {
                                const elementIndex = item.items.indexOf(element);
                                return (
                                    <li key={elementIndex} className="text-capitalize mb-2 text-small" style={{lineHeight: "16px"}} onClick = {() => {window.location.href=`/search?q=${category} ${element}`}} >{element}</li>
                                )
                            })}
                        </ul>
                    </div>
                    )
            }
        })
        const renderListBottom = obj.map((item: any) => {
            const index = obj.indexOf(item);
            if(index === 0) {
                return (
                    <div key={index} className="text-capitalize text-600 col-3 ps-4 text-small">{item.all}</div>
                )
            } else {
                return (
                    <div key={index} className="col text-capitalize text-600 ps-4 text-small">{item.all}</div>
                )
            }
        })

        return (
            <div className="w-100 index-999">
                <div className="w-100 row padding-200 px-md-5">
                    {renderList}
                </div>
                <div className="w-100 row dropdown-bottom padding-200 px-md-5">
                    {renderListBottom}
                </div>
            </div>
        )
    }

    const switchRender = (val:any) => {
        switch(val) {
            case "men":
                return (
                    renderDropdown(list.men, "men")
                )
            case "women":
                return (
                    renderDropdown(list.women, "women")
                )
            case "kids":
                return (
                    renderDropdown(list.kids, "kids")
                )
        }
    }
    return (
        <div className="row nav-dropdown">
            {
                switchRender(props.target)
            }
        </div>
    )
}

export default DropDown;