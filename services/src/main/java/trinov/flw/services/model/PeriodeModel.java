package trinov.flw.services.model;

import trinov.flw.data.entity.configuration.Configuration;
import trinov.flw.data.entity.periode.Periode;

import java.text.SimpleDateFormat;

/**
 * Created by thibault
 * Date: 18/06/18
 * Time: 15:29
 */
public class PeriodeModel {
    private static final SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
    private String dateDebut;
    private String dateFin;
    private String deadLine;

    public PeriodeModel(Periode periode) {
        dateDebut = sdf.format(periode.getDateDebut());
        dateFin = sdf.format(periode.getDateFin());
        deadLine = sdf.format(periode.getDeadLine());
    }

    public String getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(String dateDebut) {
        this.dateDebut = dateDebut;
    }

    public String getDateFin() {
        return dateFin;
    }

    public void setDateFin(String dateFin) {
        this.dateFin = dateFin;
    }

    public String getDeadLine() {
        return deadLine;
    }

    public void setDeadLine(String deadLine) {
        this.deadLine = deadLine;
    }
}
