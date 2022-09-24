import { List as AntList, ListProps } from "antd";
import Loader from "src/client/components/Loader";
import { FC } from "react";

const List: FC<ListProps<unknown>> = <T,>({
  dataSource,
  renderItem,
  loading,
}: ListProps<T>) => (
  <AntList
    dataSource={dataSource}
    renderItem={renderItem}
    loading={{ spinning: !!loading, indicator: <Loader /> }}
  />
);

export default List;
