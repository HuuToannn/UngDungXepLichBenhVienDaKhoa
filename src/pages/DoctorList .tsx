import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const DoctorList = () => {
  const doctors = [
    { id: 1, name: 'Nguyen Van A', specialization: 'Nội tổng quát' },
    { id: 2, name: 'Tran Thi B', specialization: 'Ngoại khoa' },
    // Thêm dữ liệu bác sĩ khác nếu cần
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Danh sách bác sĩ</h2>
      <DataTable value={doctors} className="mt-4" paginator rows={10}>
        <Column field="id" header="ID" />
        <Column field="name" header="Tên bác sĩ" />
        <Column field="specialization" header="Chuyên khoa" />
      </DataTable>
    </div>
  );
};

export default DoctorList;
