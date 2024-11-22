export async function fetchData() {
    try {
        const response = await fetch('./quiz.json');
        if (!response.ok) throw new Error("ミスっちゃったわ");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("データ読み込めへんかった", error);
        return null;
    }
}