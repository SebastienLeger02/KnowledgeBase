package trinov.flw.data.repository.dechets;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import trinov.flw.data.entity.dechets.Ced;

import java.util.List;

public interface CedRepository extends CrudRepository<Ced,Long> {
    @Query(
            value = "SELECT max(code) FROM ced WHERE sub_category_id = :sub_category_id",
            nativeQuery = true)
    long maxCodeBySubCategoryId(@Param("sub_category_id") String sub_category_id);

    List<Ced> getBySubCategoryId(String sub_category_id);
}
