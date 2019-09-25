package trinov.flw.data.entity.csvFile;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import trinov.flw.data.entity.pays.Pays;
import trinov.flw.data.entity.periode.Periode;

import java.io.File;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

/**
 * Created by thibault
 * Date: 11/06/18
 * Time: 14:42
 */
public interface FileUploadRepository extends CrudRepository<FileUpload, Long> {
    List<FileUpload> findAllByTypeAndStatusAndPaysIdAndPeriodeId(FileUpload.Type type, FileUpload.Status status,
                                                     Long paysId, Long periodeId);
    List<FileUpload> findByStatusNotAndPaysIdAndPeriodeId(FileUpload.Status status, Long paysId, Long periodeId);

    Iterable<FileUpload> findByStatusAndPaysId(FileUpload.Status status, Long paysId);

    Iterable<FileUpload> findByPaysIdAndPeriodeIdAndStatus(Long paysId, Long periodeId, FileUpload.Status status);

    Iterable<FileUpload> findByStatusAndPeriode(FileUpload.Status status, Periode periode);

    @Query("select count(fileUpload) from FileUpload fileUpload " +
            "where fileUpload.periode = :periode and fileUpload.pays = :pays " +
            "and fileUpload.status = :status")
    Integer getSumValidImportByPaysAndPeriodeAndStatus(@Param("pays") Pays pays, @Param("periode") Periode periode,
                                                       @Param("status") FileUpload.Status status);

    Boolean existsFileUploadByPeriodeIdAndPaysIdAndOriginalFileNameAndStatus(Long periodeId, Long paysId, String originalFileName, FileUpload.Status status);
}
