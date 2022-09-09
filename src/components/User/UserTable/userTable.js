import { useNavigate } from "react-router-dom";
import { ConfigProvider, Empty, Table, Pagination, Input } from "antd";

import "./userTable.css";
import moment from "moment";
import { ArrowRightOutlined } from "@ant-design/icons";

const UserTable = ({
  getDataList,
  dataList,
  disabledPagination,
  pagination,
  setPagination,
  loading,
  setLoading,
}) => {
  const customizeRenderEmpty = () => (
    <Empty description={<span>No data available</span>} />
  );

  const { Search } = Input;
  const navigate = useNavigate();

  const selectRow = (record) => {
    navigate("/user/data", {
      state: {
        lastPath: "/user/list",
        data: record,
      },
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30vw",
    },
    {
      title: "Registered Date",
      dataIndex: "registeredAt",
      key: "registered_at",
      render: (value) => {
        return moment(value).format("DD/MM/YYYY");
      },
    },
    {
      title: "RG",
      key: "rg",
      dataIndex: "rg",
    },
    {
      title: "CPF",
      key: "cpf",
      dataIndex: "cpf",
    },
    {
      key: "action",
      render: () => <ArrowRightOutlined />,
    },
  ];

  const handleTableChange = () => {
    getDataList();
  };

  const handleSearch = (value) => {
    if (value.trim()) {
      const { page, size } = pagination;
      setLoading(true);
      getDataList(page, size, value.toLowerCase());
    }
  };

  const onChangeSearchValue = (e) => {
    if (!e.target.value.trim()) {
      const { page, size } = pagination;
      setLoading(true);
      getDataList(page, size, null);
    }
  };

  const onChangePagination = (page, size) => {
    const { search } = pagination;
    getDataList(page, size, search);
    setPagination({ ...pagination, page, size });
  };

  return (
    <div className="table-container">
      <div className="filter">
        <Search
          className="search-input"
          placeholder="Pesquisar por nome"
          onSearch={(value) => handleSearch(value)}
          style={{ width: 200 }}
          onChange={(e) => onChangeSearchValue(e)}
          loading={loading}
        />
      </div>
      <div className="table-box">
        <ConfigProvider renderEmpty={customizeRenderEmpty}>
          <Table
            className="table"
            dataSource={dataList}
            columns={columns}
            rowKey={(record) => record.externalId}
            pagination={false}
            loading={loading}
            onChange={handleTableChange}
            locale={{
              triggerDesc: "Click para ordenação descendente",
              triggerAsc: "Click para ordenação ascendente",
              cancelSort: "Click para cancelar ordenação",
            }}
            onRow={
              selectRow
                ? (record) => ({
                    onClick: () => selectRow(record),
                  })
                : null
            }
          />
        </ConfigProvider>
        <Pagination
          locale={{ items_per_page: ` /  page` }}
          showSizeChanger
          current={pagination.page}
          defaultPageSize={pagination.size}
          total={pagination.totalCount}
          onChange={onChangePagination}
          disabled={disabledPagination}
          pageSizeOptions={["5", "10", "15", "20", "30"]}
        />
      </div>
    </div>
  );
};

export default UserTable;
