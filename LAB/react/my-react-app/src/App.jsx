import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const tour =[{
      "id": 1,
      "name": "Hà Nội - Sapa 3N2D",
      "destination": "Sapa",
      "duration": "3 ngày 2 đêm",
      "price": 2500000,
      "image": "https://picsum.photos/400/300?random=1",
      "description": "Khám phá Sapa với những ruộng bậc thang tuyệt đẹp...",
      "itinerary": [
        "Ngày 1: Khởi hành từ Hà Nội",
        "Ngày 2: Trekking Fansipan",
        "Ngày 3: Tham quan làng bản"
      ],
      "available": 15
    },
    {
      "id": 2,
      "name": "Hạ Long - Cát Bà 2N1D",
      "destination": "Hạ Long",
      "duration": "2 ngày 1 đêm",
      "price": 1800000,
      "image": "https://picsum.photos/400/300?random=2",
      "description": "Du thuyền vịnh Hạ Long...",
      "itinerary": [
        "Ngày 1: Tham quan vịnh",
        "Ngày 2: Đảo Cát Bà"
      ],
      "available": 20
    }];

  return (
    <>


      {/* Tour Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {tour.map((t) => (
          <div key={t.id} style={{ border: "1px solid #ccc", borderRadius: "8px", width: "220px", padding: "10px" }}>
            <img src={t.image} alt={t.name} style={{ width: "100%", borderRadius: "5px" }} />
            <h3 style={{ margin: "10px 0 5px" }}>{t.name}</h3>
            <p>🏔️ {t.destination}</p>
            <p>⏰ {t.duration}</p>
            <p>💰 {t.price.toLocaleString("vi-VN")} đ</p>
            <button style={{ marginTop: "10px", padding: "5px 10px" }}>View Details</button>
          </div>
        ))}
      </div>
    </>
  )

  
}

export default App
