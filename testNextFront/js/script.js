const fetchProductsData = async () => {
    let productsData;
    const url = "https://api.hexabase.com/api/v0/applications/66e0eacec5dc01ef9257ad67/datastores/66e0fa8009e30ef759065e39/items/search";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI2NzU1Nzk0NTMsImlhdCI6MTcyOTQ5OTQ1Mywic3ViIjoiNjZlMTM4N2UzZDFkMGI3YjQ5YWJkZjIzIiwidW4iOiIifQ.k91uNM6e5tfUt--0S3JH_nBYVvK9pDnRMn-3DgAXr2uDpaoHWs29nmvTRGra0pQA3Ks5meJ7bt93KQ1JiUNwqeOeG49OqJuEvj_HJEJUtW2MJYZtLSP_wV8Jx-6fdkjVd8hGos8zWcQ_LRGvk_I_jecdEq5yyAP_JoXdjEnI4xOMcFPUUOgFrFrdt0vmcHRs5De0AQI8NFsCQtXYH_orP7hZyqQdQryPPr--1NSK2KeAyuDlefiay3M8hY1M8cSfhHNdj4zSkDOeTzpLZneLLuN1q3CR-BZqmcZyRMpYLd_p5AzvgSDBQ5joAr_2wrhApmGZ5GOTl8zs64FE_NGqZg",
                    "Content-type": "application/json",
            },
            body: JSON.stringify({
                "use_or_condition": false,
                "page": 1,
                "per_page": 0,
                "use_display_id": true,
                "return_number_value": true
            }),
        });
        
        if (!response.ok) {
            return {
                status: response.status,
                error: "商品のデータを取得できませんでした。",
            };
        }

        productsData = await response.json();
        console.log(productsData);

    } catch (error) {
        console.error("", error);
        return {
            status: null,
            error: "ネットワークエラー",
        };
    }
};

fetchProductsData();