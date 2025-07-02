const properties = [
  {
    title: "Cozy Apartment in Downtown",
    description: "★★★★ · Apartment · 2 beds",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6F9-RpMnQAGUMNpiiGj73LCKHXLC5HhepbYwCJI4XuNj8FK2dk-e4hgVeGu7e2QxG0_Cn18YCFqCHVqm3Ksx8WzO2tERj7obRz6yyASGcwlLLN5PiqxsLpC2syQ6PXVWMpCcWczujBE-nVtS8e0xPNeIfDy6RTIUB-ZfmvLfQ50tbmVInxeqp_5iMzVDSSrv8uXHB3jidNrr9WdYVPwdPQyt-LoFYNZ90Sqlxf-vo2gCuE2sWF4W9p-FHLcyrOyJhvW5DwItlFM0Y",
  },
  {
    title: "Luxury Suite with Ocean View",
    description: "★★★★★· Hotel · 1 king bed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoFOMdK9HnI-TgjPPGFmwcTXad2Aq3_GWF9WuLoTDVKcgiSwJfgK8PuHLpXkIuf4QhaDCgDVWtvJ4TatQCm5NcPDbu5aIUP6dytC_BmMXZjyeeRPUD2lDnQTX5Lwu4isMndYyAOO2zbEJxYXHfyBNZ8QGbSwpEX6IYLiNYCJWwMpTWkZW2awiOeToesM2sZOdkQxg1gcYPVDiONet4biqblJ3Xklx3AWzDEvvNPEYDX43UcQgR9zOTveK7pypEuYR5kLXEoVc4Dl-x",
  },
  {
    title: "Budget-Friendly Hostel Near the Airport",
    description: "★★★ · Hostel · 1 bunk bed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqjtDG3TLgoqkdJo6nhRkuX7ukxcPg39Y55BkVXUkY4EnImXG_nci25G0bEOEj2kiVRq5T-SQiS3f0zpI0ECYcfibovRV6dvIw-9XDRNgnx6Hi89AF-nYPsWnhwYs7tnogHS1JPeBtfoEQ3L1I1yqUGkkECDYoIRdJwBFH2F6jFQAnsryE__wGkTeBzO4PBVFgjk82zJYzEDWHILwxlAFDuRIBrkwy6jF4-UWDsyP2Ic5dpV7XPaBA4Pg44ewMxk8th7bXp4rRcfPe",
  },
  {
    title: "Family-Friendly Resort with Pool",
    description: "★★★★· Resort · 2 queen beds",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_u8TBt3C3TbPhk1T-hLpQXN8VB71BpHjrOej8W3nzxoRMDK51RDf8_2WB1Mc3rIPzPtnH7OFlMRNTCTkfL_MAoeWP1IBvyPv9b7xShwwu0yV4O776gvJj-e5i04Jjh0h8jt-jBGX0XnQ3sGyPrqoft0s2lC6vo4rFPX41HBcHcpwj0ZOzh0XS1ovNkKYNY09pvTFo0_0yWiKsyd03TkIU0b2WEFoszeM9eOJde-fDsvZPMaNYSNIDyyjf0fO4A5BtwIduJeMaq-Eb",
  },
  {
    title: "Modern Loft in the Arts District",
    description: "★★★★★· Loft · 1 queen bed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqd23b5ENaTkmBWJ5IdM2f92UzjpD24TpuryI4rtxoRx2YJVec7Wie8j3o_71wAOJaW1tlEFiwhaXiHxAZJbWQrnKJm6mlHR3AmRo36eeUYIQzs9TxI36A-EWEbdqEre9TPmx7wtBqGSGQXLUHJUoaBGcT4owFHxKl7CzCwtoCkTw53yEMT4-bwi5y7gn6ZLq2Fbp3BvL1_Rb_3pZrAvRTo3awqvHv7K0qgytG6oGxrReKvmEAHan-2I6tkGstSKuInn7CzU4z2HWF",
  },
  {
    title: "Historic Hotel in the City Center",
    description: "★★★★· Hotel · 1 queen bed",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCD96JZvO4P9P8BNyF1imEk8mCFEZD12imA_uzBYU-rrTxVBcNSvKpYkBS4p2aAh3QqQ4hg9t6nU5yceJUcU7F8re66--yvyMdG-Xz8C9GecIpJWTj6_Rl7SawuSdqG9OQAfdJrAPzoR2VZMTYURnT0DjZabg3yc1KBOKr_FR8b5IMwuYUudTHL3utJJCpZiTqdcH36k8PGjI7xn3AaAyXI--LtXKvJeoLgM9ARE7esdf8CWb4O0xn0JmDT1zEho-GQcFp-hox8ixxv",
  },
];

export default function ResultList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {properties.map((property, index) => (
        <div key={index} className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: `url(${property.image})` }}
          ></div>
          <div>
            <p className="text-[#101518] text-base font-medium leading-normal">
              {property.title}
            </p>
            <p className="text-[#5c778a] text-sm font-normal leading-normal">
              {property.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
