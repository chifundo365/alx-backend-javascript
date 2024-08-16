export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((value) => value)
    .catch((error) => `${error}`);
}
