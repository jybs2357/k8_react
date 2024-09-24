import MyListData from "./MyListData.json";
import MyListItem from "./MyListItem";

export default function MyList() {
  console.log(MyListData)
  const tags = MyListData.map( item => <MyListItem
                                        key = {item.title}
                                        imgUrl = {item.imgUrl}
                                        title = {item.title}
                                        content = {item.content} />);

  return (
    <div className="w-10/12 grid girl-cols-1 lg:grid-cols-2 gap-4">
      {tags}
    </div>
  )
}
