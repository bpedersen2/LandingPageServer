import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const datasets = [
      {
        id: 11,
        name: 'https://doi.org/10.1799/ESS0001',
        creator: 'Dorothea Pfeiffer',
        affiliation: 'ESS DG',
        title: 'Vanadium sample data from NMX beam line',
        abstract: 'This data was collected as part of BrightnESS, funded by the European Union ' +
          'Framework Programme for Research and Innovation Horizon 2020, under grant agreement 676548.  ' +
          'It consists of test data for the NMX detector.',
        publisher: 'ESS-DMSC',
        year: '2017',
        url: 'https://doi.org/10.1799/ESS0001',
        resource_type: 'NeXus HDF5 file'
      },
      {
        id: 12,
        name: 'https://doi.org/10.1799/ESS0002',
        creator: 'Dorothea Pfeiffer',
        affiliation: 'ESS DG',
        title: 'Vanadium sample data from NMX beam line',
        abstract: 'This data was collected as part of BrightnESS, funded by the European Union ' +
          'Framework Programme for Research and Innovation Horizon 2020, under grant agreement 676548.  ' +
          'It consists of test data for the NMX detector.',
        publisher: 'ESS-DMSC',
        year: '2017',
        url: 'https://doi.org/10.1799/ESS0001',
        resource_type: 'NeXus HDF5 file'
      },
      {
        id: 13,
        name: 'https://doi.org/10.1799/ESS0003',
        creator: 'Dorothea Pfeiffer',
        affiliation: 'ESS DG',
        title: 'Vanadium sample data from NMX beam line',
        abstract: 'This data was collected as part of BrightnESS, funded by the European Union ' +
          'Framework Programme for Research and Innovation Horizon 2020, under grant agreement 676548.  ' +
          'It consists of test data for the NMX detector.',
        publisher: 'ESS-DMSC',
        year: '2017',
        url: 'https://doi.org/10.1799/ESS0001',
        resource_type: 'NeXus HDF5 file'
      },
      {
        id: 14,
        name: 'https://doi.org/10.1799/ESS0004',
        creator: 'Dorothea Pfeiffer',
        affiliation: 'ESS DG',
        title: 'Vanadium sample data from NMX beam line',
        abstract: 'This data was collected as part of BrightnESS, funded by the European Union ' +
          'Framework Programme for Research and Innovation Horizon 2020, under grant agreement 676548.  ' +
          'It consists of test data for the NMX detector.',
        publisher: 'ESS-DMSC',
        year: '2017',
        url: 'https://doi.org/10.1799/ESS0001',
        resource_type: 'NeXus HDF5 file'
      },
      {
        id: 15,
        name: 'https://doi.org/10.1799/ESS0005',
        creator: 'Dorothea Pfeiffer',
        affiliation: 'ESS DG',
        title: 'Vanadium sample data from NMX beam line',
        abstract: 'This data was collected as part of BrightnESS, funded by the European Union ' +
          'Framework Programme for Research and Innovation Horizon 2020, under grant agreement 676548.  ' +
          'It consists of test data for the NMX detector.',
        publisher: 'ESS-DMSC',
        year: '2017',
        url: 'https://doi.org/10.1799/ESS0001',
        resource_type: 'NeXus HDF5 file'
      },
      {
        id: 16,
        name: 'https://doi.org/10.1799/ESS0006',
        creator: 'Dorothea Pfeiffer',
        affiliation: 'ESS DG',
        title: 'Vanadium sample data from NMX beam line',
        abstract: 'This data was collected as part of BrightnESS, funded by the European Union ' +
          'Framework Programme for Research and Innovation Horizon 2020, under grant agreement 676548.  ' +
          'It consists of test data for the NMX detector.',
        publisher: 'ESS-DMSC',
        year: '2017',
        url: 'https://doi.org/10.1799/ESS0001',
        resource_type: 'NeXus HDF5 file'
      },
      {
        id: 17,
        name: 'https://doi.org/10.1799/ESS0007',
        creator: 'Dorothea Pfeiffer',
        affiliation: 'ESS DG',
        title: 'Vanadium sample data from NMX beam line',
        abstract: 'This data was collected as part of BrightnESS, funded by the European Union ' +
          'Framework Programme for Research and Innovation Horizon 2020, under grant agreement 676548.  ' +
          'It consists of test data for the NMX detector.',
        publisher: 'ESS-DMSC',
        year: '2017',
        url: 'https://doi.org/10.1799/ESS0001',
        resource_type: 'NeXus HDF5 file'
      },
      {
        id: 18,
        name: 'https://doi.org/10.1799/ESS0008',
        creator: 'Dorothea Pfeiffer',
        affiliation: 'ESS DG',
        title: 'Vanadium sample data from NMX beam line',
        abstract: 'This data was collected as part of BrightnESS, funded by the European Union ' +
          'Framework Programme for Research and Innovation Horizon 2020, under grant agreement 676548.  ' +
          'It consists of test data for the NMX detector.',
        publisher: 'ESS-DMSC',
        year: '2017',
        url: 'https://doi.org/10.1799/ESS0001',
        resource_type: 'NeXus HDF5 file'
      },
      {
        id: 19,
        name: 'https://doi.org/10.1799/ESS0009',
        creator: 'Dorothea Pfeiffer',
        affiliation: 'ESS Detector Group',
        title: 'Vanadium sample data from NMX beam line',
        abstract: 'This data was collected as part of BrightnESS, funded by the European Union ' +
          'Framework Programme for Research and Innovation Horizon 2020, under grant agreement 676548.  ' +
          'It consists of test data for the NMX detector.',
        publisher: 'ESS-DMSC',
        year: '2017',
        url: 'https://doi.org/10.1799/ESS0001',
        resource_type: 'NeXus HDF5 file'
      },
      {
        id: 20,
        name: 'https://doi.org/10.1799/ESS0010',
        creator: 'Dorothea Pfeiffer',
        affiliation: 'ESS DG',
        title: 'Vanadium sample data from NMX beam line',
        abstract: 'This data was collected as part of BrightnESS, funded by the European Union ' +
          'Framework Programme for Research and Innovation Horizon 2020, under grant agreement 676548.  ' +
          'It consists of test data for the NMX detector.',
        publisher: 'ESS-DMSC',
        year: '2017',
        url: 'https://doi.org/10.1799/ESS0001',
        resource_type: 'NeXus HDF5 file'
      }
    ];
    return {datasets: datasets};
  }
}
