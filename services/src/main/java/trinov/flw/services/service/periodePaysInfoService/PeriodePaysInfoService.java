package trinov.flw.services.service.periodePaysInfoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import trinov.flw.data.entity.periode.Periode;
import trinov.flw.data.entity.periode.PeriodeRepository;
import trinov.flw.data.entity.periodePaysInfo.PeriodePaysInfo;
import trinov.flw.data.entity.periodePaysInfo.PeriodePaysInfoId;
import trinov.flw.data.entity.periodePaysInfo.PeriodePaysInfoRepository;
import trinov.flw.data.entity.user.User;
import trinov.flw.services.service.userService.IUserService;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.Random;

/**
 * Created by thibault
 * Date: 21/06/18
 * Time: 09:26
 */
@Service
public class PeriodePaysInfoService implements IPeriodePaysInfoService {
    private final IUserService userService;
    private final PeriodeRepository periodeRepository;
    private final PeriodePaysInfoRepository periodePaysInfoRepository;

    @Autowired
    public PeriodePaysInfoService(IUserService userService, PeriodeRepository periodeRepository, PeriodePaysInfoRepository periodePaysInfoRepository) {
        this.userService = userService;
        this.periodeRepository = periodeRepository;
        this.periodePaysInfoRepository = periodePaysInfoRepository;
    }

    @Override
    @Transactional
    public PeriodePaysInfo getOrCreatePeriodePaysInfo() {
        User user = userService.getLoggedInUser();
        Optional<Periode> optionalPeriode = getActualPeriode();
        Periode periode;
        if(optionalPeriode.isPresent()) {
            periode = optionalPeriode.get();
        } else {
            throw new RuntimeException("Pas de période en cours");
        }

        Optional<PeriodePaysInfo> optionalPeriodePaysInfo =
                periodePaysInfoRepository.findByPeriodePaysInfoId(new PeriodePaysInfoId(periode.getId(), user.getPays().getId()));

        PeriodePaysInfo periodePaysInfo;
        if(!optionalPeriodePaysInfo.isPresent()) {
            periodePaysInfo = new PeriodePaysInfo();
            periodePaysInfo.setPeriodePaysInfoId(new PeriodePaysInfoId(periode.getId(), user.getPays().getId()));
            periodePaysInfo.setReadyForAnalysis(false);
            periodePaysInfoRepository.save(periodePaysInfo);
        } else {
            periodePaysInfo = optionalPeriodePaysInfo.get();
        }
        return periodePaysInfo;
    }

    @Override
    public Optional<Periode> getActualPeriode() {
        Optional<Periode> periode = periodeRepository.getActualPeriode();
        if(periode.isPresent() && periode.get().getCoeffCrypto() == null) {
            Random r = new Random();
            periode.get().setCoeffCrypto(r.nextInt(10000) + 2);
            periodeRepository.save(periode.get());
        }
        return periode;
    }
}
