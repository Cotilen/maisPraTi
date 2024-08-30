package exercicio07;

public class PrintJob {
    private String documentName;
    private int jobId;

    public PrintJob(String documentName, int jobId) {
        this.documentName = documentName;
        this.jobId = jobId;
    }

    public String getDocumentName() {
        return documentName;
    }

    public int getJobId() {
        return jobId;
    }

    @Override
    public String toString() {
        return "Trabalho de Impressão [ID: " + jobId + ", Documento: " + documentName + "]";
    }
}

