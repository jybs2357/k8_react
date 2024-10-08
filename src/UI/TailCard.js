export default function TailCard({imgUrl, title, content, kw}) {
    const kws = kw.include(',') ? kw.split(',') : [kw];
    const kwTags = kws.map(item => <span key={item} className="inline-flex bg-slate-200 p-1 m-2 rounded-sm">{item}</span>);
    console.log(kws)

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <p>
                <img className="rounded-t-lg" src={imgUrl} alt="" />
            </p>
            <div className="p-5">
                <h1 className="mb-2 text-2xl font-bold tracking-tight">
                    {title}
                </h1>
                <p className="mb-3 font-normal">{content}</p>
                <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                     text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    [kw]
                </div>
            </div>
        </div>

    )
}
