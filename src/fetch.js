import constans from "@/constans"

export function fetchStoreList() {
    const fetchUrl = constans.IS_USA ? 'https://b2b.newurtopia.com/ibd-api/third_party/list_shops' : "https://b2b.newurtopia.de/ibd-api//third_party/list_shops"

    return new Promise((async resolve => {
        const {
            data,
            code,
            message
        } = await fetch(fetchUrl, {
            headers: {
                origin: 'api-test.newurtopia.com',
                referer: 'api-test.newurtopia.com',
                // 'content-type': 'application/json; charset=UTF-8'
            }
        }).then(res => res.json())

        if (!message && code === 200) {
            return resolve(data)
        }

        resolve([])
    }))
}

export function fetchUserLocation() {
    return new Promise(resolve => {
        if (!navigator.geolocation) {
            return resolve(constans.DEFAULT_CENTER)
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                return resolve([position.coords.longitude, position.coords.latitude])
            },
            (error) => {
                console.error("获取位置失败:", error.message);
                return resolve(constans.DEFAULT_CENTER)
            }, {
                enableHighAccuracy: true, // 开启高精度模式
                timeout: 15000, // 最多等待 5 秒
                maximumAge: 0, // 不使用缓存数据
            }
        );
    })
}


export function submitBookRide(userInfo, storeInfo) {
    const extras = {
        test_ride_model: constans.E_BIKES[userInfo.ebike].name,
        test_ride_time: `${userInfo.date} ${userInfo.time}`,
        phone_number: userInfo.phone,
        spot: storeInfo.city,
        name: userInfo.username,
        phone: userInfo.phone,
        email: userInfo.email,
        source: constans.SHOP_DOMAIN,
        book_time: `${userInfo.date} ${userInfo.time}`,
        shop_info: storeInfo
    }

    const body = {
        module: `website-${constans.IS_USA ? 'us' : 'de'}`,
        trace_name: `testride-${constans.IS_USA ? 'us' : 'de'}`,
        trace_type: `submit-${constans.IS_MOBILE ? 'mb' : 'pc' }`,
        extras: {
            spot: storeInfo.city,
            userInfo: extras,
            ...extras
        },
        ...extras
    }

    try {
        fetch('https://api.newurtopia.com/third_part/book_ride', {
            method: 'POST',
            body: JSON.stringify(body)
        })
        fetch('https://api.newurtopia.com/third_part/traces', {
            method: 'POST',
            body: JSON.stringify(body)
        })

    } catch (error) {
        console.log(error)
    }
}